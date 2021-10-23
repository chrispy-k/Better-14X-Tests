from flask import Flask
from models import db, User

app = Flask(__name__)
app.config.from_object("config.Config")

# import api routes after app created
from routes import * 

# Init db from the models.py file 
db.init_app(app)

# comment out when don't want to wipe db
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)