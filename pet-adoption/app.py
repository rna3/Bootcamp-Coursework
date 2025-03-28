from flask import Flask, render_template, flash, redirect, url_for
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet
from forms import AddPetForm, EditPetForm


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///adopt_db"
app.config['SECRET_KEY'] = "supersecretkey"

connect_db(app)

with app.app_context():
    # db.drop_all()
    db.create_all()

@app.route("/")
def home_page():
    """show the home page with all the pets"""
    pets = Pet.query.all()
    return render_template("home_page.html", pets=pets)

@app.route("/add", methods=["GET", "POST"])
def add_pet_form():
    """show the add pet form and handle the submit"""

    form = AddPetForm()

    if form.validate_on_submit():  

        data = {k:v for k,v in form.data.items() if k!= "csrf_token"}
        new_pet = Pet(**data)
        db.session.add(new_pet)
        db.session.commit()

        flash(f"{new_pet.name} was added to the db")
        return redirect(url_for('home_page'))

    else:
        return render_template("add_pet_form.html", form=form)
    
@app.route("/<int:pet_id>", methods=["GET", "POST"])
def pet_details(pet_id):
    """show the pet details page/ edit form and handle the submit"""
    
    pet = Pet.query.get_or_404(pet_id)
    form = EditPetForm(obj=pet)

    if form.validate_on_submit():
        pet.photo_url = form.photo_url.data
        pet.notes = form.notes.data
        pet.available = form.available.data

        db.session.commit()
        flash(f"{pet.name} updated.")

        return redirect(url_for('home_page'))

    else:
        return render_template("/pet_details.html", form=form, pet=pet)