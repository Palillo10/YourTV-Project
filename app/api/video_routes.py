from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from datetime import datetime
from app.models import Video, db
from app.forms import VideoForm
# import cv2
# import numpy as np
from app.api.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)

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
      title = form.Title.data,
      description = form.Description.data,
      thumbnail = form.Thumbnail.data,
      video_data = form.Video.data,
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


@video_routes.route('/upload-video', methods=["POST"])
def thumbnail_test():
  if "video" not in request.files:
    return {"errors": "video : video required"}, 400

  video = request.files["video"]

  if not allowed_file(video.filename):
      return {"errors": "video : file type not permitted"}, 400

  video.filename = get_unique_filename(video.filename)

  upload = upload_file_to_s3(video)


  if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

  url = upload["url"]
  # flask_login allows us to get the current user from the request
  return {"url": url}
