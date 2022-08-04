from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Video

validators=[DataRequired()]

class VideoForm(FlaskForm):
  user_id = IntegerField('Creator', validators)
  title = StringField('Title', validators)
  description = TextAreaField('Descripition', validators)
  thumbnail = TextAreaField('Thumbnail', validators)
  video_data = TextAreaField('Video', validators)
