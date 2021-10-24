from flask import Flask
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/better_143'
app.config['SECRET_KEY'] = 'a b c d e'

# import api routes after app created
@app.route('/')
def greeting():
    return "Greetings"
from auth_routes import * 
from test_routes import * 

# Init db from the models.py file 
""" db.init_app(app)

# comment out when don't want to wipe db
with app.app_context():
    db.create_all() """

#migrate = Migrate(app, db) # this

if __name__ == "__main__":
    app.run(debug=True)