from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from datetime import datetime
from app.models import Video, db, User, Like
from app.forms import VideoForm
# from ffmpy import FFmpeg
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

    video.title = form.Title.data
    video.description = form.Description.data
    video.thumbnail = form.Thumbnail.data
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
def upload_video():
  if "video" not in request.files:
    return {"errors": "video : Video file required"}, 400

  video = request.files["video"]

  if not allowed_file(video.filename):
      return {"errors": "video : Must be file type of '.mp4'"}, 400

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





@video_routes.route('/upload-thumbnail', methods=["POST"])
def upload_thumbnail():

  # print(request.files)
  if "image" not in request.files:
    return {"errors": "image : Image required for upload"}, 400

  image = request.files["image"]

  if not allowed_file(image.filename):
      return {"errors": "image : File type not permitted"}, 400

  image.filename = get_unique_filename(image.filename)

  upload = upload_file_to_s3(image)


  if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

  url = upload["url"]
  # flask_login allows us to get the current user from the request
  return {"url": url}


@video_routes.route('/<int:videoId>/add-view', methods=["PUT"])
def add_view(videoId):
  video = Video.query.get(videoId)
  video.views = video.views + 1
  db.session.commit()

  return {"video": video.to_dict()}



@video_routes.route('/<int:videoId>/add-like', methods=["PUT"])
def add_like(videoId):
  video = Video.query.get(videoId)
  user = User.query.get(request.get_json()["userId"])
  new_like = Like(
    user_id = user.id,
    video_id = video.id
  )
  db.session.add(new_like)
  db.session.commit()

  return {"video": video.to_dict()}


@video_routes.route('/<int:videoId>/remove-like', methods=["PUT"])
def remove_like(videoId):
  # video = Video.query.get(videoId)
  # user = User.query.get(request.get_json()["userId"])
  like = Like.query.filter_by(user_id=request.get_json()["userId"], video_id=videoId).first()
  db.session.delete(like)
  db.session.commit()
  return {"deleted": "deleted"}













# @video_routes.route('/thumbnail-test')
# def thumbnail_test():

#   ff = FFmpeg(inputs={'https://your-tv-app-bucket.s3.us-east-2.amazonaws.com/111938b2df3b4435b6964bf276d81b7a.mp4': None}, outputs={"??outddddpustfs.png": ['-ss', '00:00:4', '-vframes', '1']})


#   output = ff.cmd
#   image = output.split('??')[1]
#   res =
#   # Print result
#   # ffmpeg -i input.mp4 -ss 00:00:10 -vframes 1 output.png

#   ff.run()
#   # print("OUTPUT", output)
#   return {"thumbnail": image}
