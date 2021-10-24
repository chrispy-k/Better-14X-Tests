from flask import request, abort, jsonify, g, url_for
from flask_restful import Api
from flask_httpauth import HTTPBasicAuth

from main import app 
from models import Question, db, User, Test

api = Api()

# TODO: put request for each question 
# TODO: put request for the test 


@app.route('/api/tests/get_questions/<int:id>')
def get_questions_for_test(id):
    question_list = Question.query.filter_by(test_id=id)
    all_questions = [{
            'number': question.number,
            'description': question.description,
            'student_response': question.student_response,
            'score': question.score,
            'test_id': question.test_id
        } for question in question_list
    ]
    return jsonify(all_questions)

# Get all the current tests given a user (id is for the user here)
@app.route('/api/tests/get_tests/<int:id>', methods=['GET'])
def get_tests_from_user(id):
    # the id here == the owner_id in the User model 
    test_list = Test.query.filter_by(owner_id=id)
    all_tests = [{
            'name': test.name,
            'score': test.score,
            'teacher': test.teacher,
            'course': test.course,
            'owner_id': test.owner_id
        } for test in test_list
    ]
    return jsonify(all_tests)



# Create a question for an associated test
@app.route('/api/tests/add_question', methods=['POST'])
def add_question():
    number = request.json.get('number')
    description = request.json.get('description')
    student_response = request.json.get('student_response')
    score = request.json.get('score')

    test_id = request.json.get('test_id')

    # error handling 
    question = Question(number=number,description=description,student_response=student_response,score=score,test_id=test_id)
    db.session.add(question)
    db.session.commit()

    # confirmation message from the post 
    return {
        "test_id": test_id,
        "number": number,
        "description": description,
        "student_response": student_response,
        "score": score
    }


# creates a new test in the database and returns a JSON of the data inserted 
@app.route('/api/tests/create', methods=['POST'])
def create_test():
    name = request.json.get('name')
    score = request.json.get('score')
    teacher = request.json.get('teacher')
    course = request.json.get('course')

    owner_id = request.json.get('owner_id')

    # error handling
    test = Test(name=name,score=score,teacher=teacher,course=course,owner_id=owner_id)
    db.session.add(test)
    db.session.commit()

    # just to confirm 
    return {
        'name': name,
        'score': score,
        'teacher': teacher,
        'course': course,
        'owner_id': owner_id
    }

# registers a new User object
@app.route('/api/auth/register', methods=['POST'])
def register():
    username = request.json.get('username')
    password = request.json.get('password')
    firstname = request.json.get('firstname')
    lastname = request.json.get('lastname')
    type_user = request.json.get('type_user')
    email = request.json.get('email')

    if username is None or password is None:
        abort(400)

    # see if there is currently a user 
    if User.query.filter_by(username=username).first() is not None:
        abort(400)

    # checks for unique emails 
    if User.query.filter_by(email=email).first() is not None:
        abort(400)

    user = User(username=username,email=email,firstname=firstname,lastname=lastname,type_user=type_user)
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