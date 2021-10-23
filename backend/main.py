from flask import Flask
from flask_restful import Api, Resource, reqparse 
from flask_sqlalchemy import SQLAlchemy 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/better_143'

db = SQLAlchemy(app)
api = Api(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(100), unique=True)
    
    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return f'User: {self.username}, Email: {self.email}'


if __name__ == "__main__":
    app.run(debug=True)