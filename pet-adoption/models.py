from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    """Connect database to Flask app"""

    db.app = app
    db.init_app(app)

class Pet(db.Model):
    """model for pets available to adopt"""

    __tablename__ = "pets"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    species = db.Column(db.Text, nullable=False)
    photo_url = db.Column(db.Text)
    age = db.Column(db.Integer)
    notes = db.Column(db.Text)
    available = db.Column(db.Boolean, nullable=False, default=True)

    def picture_url(self):
        """Return image for pet or default"""

        return self.photo_url if self.photo_url else "https://via.placeholder.com/150" 

    