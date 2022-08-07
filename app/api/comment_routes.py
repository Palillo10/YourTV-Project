from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from datetime import datetime
from app.models import Comment, db
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)


def validation_errors_to_error_messages(validation_errors):

  errorMessages = []
  for field in validation_errors:
      for error in validation_errors[field]:
          errorMessages.append(f'{field} : {error}')
  return errorMessages


@comment_routes.route('/<int:id>')
def comments(id):
  comments = Comment.query.filter(Comment.video_id == id )
  return {'comments': [comment.to_dict() for comment in comments]}
  # return {"hello"}

@comment_routes.route('/', methods=["POST"])
@login_required
def add_comment():
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_comment = Comment(
      user_id = form.data["user_id"],
      video_id = form.data["video_id"],
      body = form.data["body"],
      updated_at = datetime.now()
    )

    db.session.add(new_comment)
    db.session.commit()

    return {'newComment': new_comment.to_dict()}
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@comment_routes.route('/<int:commentId>', methods=["PUT"])
@login_required
def update_comment(commentId):
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    comment = Comment.query.get(commentId)

    comment.body = form.data["body"]
    comment.updated_at= datetime.now()

    db.session.commit()

    return {"comment": comment.to_dict()}
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@comment_routes.route('/<int:commentId>', methods=["DELETE"])
@login_required
def delete_comment(commentId):
  comment = Comment.query.get(commentId)
  print(comment)
  db.session.delete(comment)
  db.session.commit()
  return {"deleted": "deleted"}
