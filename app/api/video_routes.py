from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from datetime import datetime
from app.models import Video, db
from app.forms import VideoForm

video_routes = Blueprint('videos', __name__)


def validation_errors_to_error_messages(validation_errors):

  errorMessages = []
  for field in validation_errors:
      for error in validation_errors[field]:
          errorMessages.append(f'{field} : {error}')
  return errorMessages

@video_routes.route('/')
def videos():
  videos = Video.query.all()
  return {'videos': [video.to_dict() for video in videos]}


@video_routes.route('/', methods=["POST"])
@login_required
def add_video():
  form = VideoForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_video = Video(
      user_id = form.user_id.data,
      title = form.title.data,
      description = form.description.data,
      thumbnail = form.thumbnail.data,
      video_data = form.video_data.data,
      updated_at = datetime.now()
    )

    db.session.add(new_video)
    db.session.commit()

    return {'newVideo': new_video.to_dict()}
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@video_routes.route('/<int:videoId>', methods=["PUT"])
@login_required
def update_video(videoId):
  form = VideoForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    video = Video.query.get(videoId)

    video.title = form.title.data
    video.description = form.description.data
    video.thumbnail = form.thumbnail.data
    video.video_data = video.video_data
    video.updated_at = datetime.now()

    db.session.commit()

    return {"video": video.to_dict()}
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@video_routes.route('/<int:videoId>', methods=["DELETE"])
@login_required
def delete_video(videoId):
  video = Video.query.get(videoId)
  db.session.delete(video)
  db.session.commit()
  return {"deleted": "deleted"}
