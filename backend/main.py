from flask import Flask, request, abort, jsonify, g, url_for
from flask_restful import Api, Resource, reqparse 
from flask_sqlalchemy import SQLAlchemy 
from passlib.apps import custom_app_context as pwd_context 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/better_143'

db = SQLAlchemy(app)
api = Api(app)

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(100), unique=True)
    password_hash = db.Column(db.String(128))

    # stores a hash of the pw in the class 
    def hash_pw(self, password):
        self.password_hash = pwd_context.encrypt(password)
    
    # returns true if the password matches the hash
    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)
    
    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return f'User: {self.username}, Email: {self.email}'

# registers a new User object
@app.route('/api/auth/register', methods=['POST'])
def new_user():
    username = request.json.get('username')
    password = request.json.get('password')
    email = request.json.get('email')

    if username is None or password is None:
        abort(400)

    # see if there is currently a user 
    if User.query.filter_by(username=username).first() is not None:
        abort(400)

    # checks for unique emails 
    if User.query.filter_by(email=email).first() is not None:
        abort(400)

    user = User(username=username,email=email)
    user.hash_pw(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({ 'username': user.username }), 201, {'Location': url_for('get_user', id = user.id, _external = True)}

# returns the username given the user id 
@app.route('/api/auth/register/get_user/<int:id>')
def get_user(id):
    user = User.query.get(id)
    if not user:
        abort(400)
    return jsonify({'username': user.username})


if __name__ == "__main__":
    app.run(debug=True)