from flask import Flask, request, abort, jsonify, g, url_for
from flask_restful import Api, Resource, reqparse 
from flask_sqlalchemy import SQLAlchemy 
from flask_httpauth import HTTPBasicAuth
from passlib.apps import custom_app_context as pwd_context 
from itsdangerous import (TimedJSONWebSignatureSerializer
                          as Serializer, BadSignature, SignatureExpired)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/better_143'
app.config['SECRET_KEY'] = 'a b c d e'

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


    def generate_auth_token(self, expiration = 600):
        s = Serializer(app.config['SECRET_KEY'], expires_in = expiration)
        return s.dumps({ 'id': self.id })

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(app.config['SECRET_KEY'])
        try:
            data = s.loads(token)
        except SignatureExpired:
            return None # valid token, but expired
        except BadSignature:
            return None # invalid token
        user = User.query.get(data['id'])
        return user
    
    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return f'User: {self.username}, Email: {self.email}'

# registers a new User object
@app.route('/api/auth/register', methods=['POST'])
def register():
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


auth = HTTPBasicAuth()

# tmp api endpoint that requires authentication to get the resource
@app.route('/api/resource')
@auth.login_required
def get_resource():
    return {
        'data': 'Hello, %s!' % g.user.username
    }

@app.route('/api/auth/token')
@auth.login_required
def get_auth_token():
    token = g.user.generate_auth_token()
    return {
        'token': token.decode('ascii')
    }


@auth.verify_password
def verify_password(username_or_token, password):
    # try token auth first
    user = User.verify_auth_token(username_or_token)
    
    # if token auth fails try username/pw
    if not user:
        user = User.query.filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False

    g.user = user
    return True


if __name__ == "__main__":
    app.run(debug=True)