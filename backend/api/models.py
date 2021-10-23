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