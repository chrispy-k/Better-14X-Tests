from flask import request, abort, jsonify, g, url_for
from flask_restful import Api
from flask_httpauth import HTTPBasicAuth

from __init__ import app 
from models import db, User

api = Api()

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