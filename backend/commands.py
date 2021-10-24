import click 
from flask.cli import with_appcontext
from db import db 
from models import User, Test, Question

@click.command(name='create_tables')
@with_appcontext
def create_tableS():
    db.create_all()