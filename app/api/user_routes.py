from flask import Blueprint, jsonify, session
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/<channelName>')
# @login_required
def single_user(channelName):
    user = User.query.filter(User.channel_name == channelName).one()
    return {"user": user.to_dict()}



@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    # print(user.datetime)
    return user.to_dict()
