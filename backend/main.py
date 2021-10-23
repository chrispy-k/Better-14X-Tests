from flask import Flask
from flask_restful import Api, Resource 


app = Flask(__name__)
api = Api(app)


# User class 
class User(Resource):
    def get(self):
        return {
            'data': 'user test'
        }

    def post(self, username, email, password):
        return {
            'username': username,
            'email': email,
            'password': password
        }

api.add_resource(User, "/register/<string:username>/<string:email>/<string:password>")


if __name__ == "__main__":
    app.run(debug=True)