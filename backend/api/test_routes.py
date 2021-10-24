from flask import json, request, abort, jsonify, g, url_for
from flask_restful import Api

from .app import app 
from .models import db, Test, Question

api = Api()

# update test score after grading
@app.route('/api/tests/grade/<int:id>', methods=['PUT'])
def grade_test(id):
    grade = request.json.get("score")
    graded_test = Test.query.filter_by(id=id).update(dict(score=grade))
    db.session.commit()
    return {"score": grade}

# updates a question with the student response 
@app.route('/api/tests/update_question/<int:id>', methods=['PUT'])
def update_question(id):
    answer = request.json.get('student_response')
    updated_question = Question.query.filter_by(id=id).update(dict(student_response=answer))
    db.session.commit()
    return {"answer": answer}

# gets all the questions for a given test 
@app.route('/api/tests/get_questions/<int:id>', methods=['GET'])
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