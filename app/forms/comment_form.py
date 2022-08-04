from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Comment

validators = [DataRequired()]

class CommentForm(FlaskForm):
  user_id = IntegerField('Creator', validators)
  video_id = IntegerField('Video', validators)
  body = TextAreaField('Comment Body', validators)
