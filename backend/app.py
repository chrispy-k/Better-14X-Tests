from flask import Flask
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://rbcenvavwhsjsk:277a11032fbf27c60a93707aa7a40fd8e33361d5601cd3a1d98d63bcb7d53dff@ec2-3-219-103-45.compute-1.amazonaws.com:5432/d2ailsp0qf4tui'
app.config['SECRET_KEY'] = 'a b c d e'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# import api routes after app created
@app.route('/')
def greeting():
    return "Greetings"
from auth_routes import * 
from test_routes import * 

# Init db from the models.py file 
db.init_app(app)

# comment out when don't want to wipe db
with app.app_context():
    db.create_all()

#migrate = Migrate(app, db) # this

if __name__ == "__main__":
    app.run(debug=True)

