from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Video

video_routes = Blueprint('videos', __name__)

@video_routes.route('/')
def videos():
  videos = Video.query.all()
  return {'videos': [video.to_dict() for video in videos]}


# @video_routes.route('/', methods=["POST"])
# def add_video():
