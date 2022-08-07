from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Video

validators=[DataRequired()]

class VideoForm(FlaskForm):
  user_id = IntegerField('Creator', validators)
  Title = StringField('Title', validators)
  Description = TextAreaField('Descripition')
  Thumbnail = TextAreaField('Thumbnail')
  Video= TextAreaField('Video', validators)
