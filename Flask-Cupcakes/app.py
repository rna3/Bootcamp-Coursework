"""Flask app for Cupcakes"""
from flask import Flask, jsonify, request, render_template
from models import db, connect_db, Cupcake
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///cupcakes"
CORS(app)


connect_db(app)

with app.app_context():
    # db.drop_all()
    db.create_all()

def serialize_cupcake(cupcake):
    """serialize a cupcake SQLAlchemy obj to dictionary"""

    return {
        "id" : cupcake.id,
        "flavor" : cupcake.flavor,
        "size" : cupcake.size,
        "rating" : cupcake.rating,
        "image" : cupcake.image
    }


@app.route("/")
def show_home_page():
    """show the home page, a list of cupcakes"""

    return render_template("home_page.html")


@app.route("/api/cupcakes")
def show_all_cupcakes():
    """query all cupcakes and serialize to return JSON data"""

    cupcakes = Cupcake.query.all()
    serialized = [serialize_cupcake(c) for c in cupcakes]

    return jsonify (cupcakes=serialized)


@app.route("/api/cupcakes/<int:cupcake_id>")
def show_one_cupcake(cupcake_id):
    """show one cupcake based on the ID"""

    cupcake = Cupcake.query.get_or_404(cupcake_id)
    serialized = serialize_cupcake(cupcake)

    return jsonify(cupcake=serialized)


@app.route("/api/cupcakes", methods=["POST"])
def add_cupcake():
    """add a cupcake from form to the database"""

    flavor = request.json["flavor"]
    size = request.json["size"]
    rating = request.json["rating"]
    image = request.json["image"]

    new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image)

    db.session.add(new_cupcake)
    db.session.commit()

    serialized = serialize_cupcake(new_cupcake)

    return (jsonify(cupcake=serialized), 201 )


@app.route("/api/cupcakes/<int:cupcake_id>", methods=["PATCH"])
def update_cupcake(cupcake_id):
    """update a cupcake in the database"""

    cupcake = Cupcake.query.get_or_404(cupcake_id)

    cupcake.flavor = request.json["flavor"]
    cupcake.rating = request.json["rating"]
    cupcake.size = request.json["size"]
    cupcake.image = request.json["image"]

    db.session.add(cupcake)
    db.session.commit()

    serialized = [serialize_cupcake(cupcake)]

    return (jsonify(cupcake=serialized), 201)


@app.route("/api/cupcakes/<int:cupcake_id>", methods=["DELETE"])
def delete_cupcake(cupcake_id):
    """delete a cupcake from the db"""

    cupcake = Cupcake.query.get_or_404(cupcake_id)

    db.session.delete(cupcake_id)
    db.session.commit()

    return jsonify(message="Deleted")