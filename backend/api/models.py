from config import Config
from flask_sqlalchemy import SQLAlchemy 
from passlib.apps import custom_app_context as pwd_context 
from itsdangerous import (TimedJSONWebSignatureSerializer
                          as Serializer, BadSignature, SignatureExpired)
                
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(100), unique=True)
    password_hash = db.Column(db.String(128))

    # setup one to many relationships 
    tests = db.relationship('Test', backref='owner') # test table gets a psuedo column of 'owner'

    # stores a hash of the pw in the class 
    def hash_pw(self, password):
        self.password_hash = pwd_context.encrypt(password)
    
    # returns true if the password matches the hash
    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)


    def generate_auth_token(self, expiration = 600):
        s = Serializer(Config.SECRET_KEY, expires_in = expiration)
        return s.dumps({ 'id': self.id })

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(Config.SECRET_KEY)
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

# many tests associated with one user 
class Test(db.Model):
    __tablename__ = "tests"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    score = db.Column(db.Integer)
    teacher = db.Column(db.String(80))
    course = db.Column(db.String(80))

    # add foreignkey column (refers to PK of User)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id')) 

    def __init__(self, name, score, course, teacher, owner_id):
        self.name = name
        self.score = score 
        self.course = course
        self.teacher = teacher
        self.owner_id = owner_id

    def __repr__(self):
        return f'Test: {self.name}, User: {self.owner_id}'

