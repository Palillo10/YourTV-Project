from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if channel_name is already in use
    channel_name = field.data
    user = User.query.filter(User.channel_name == channel_name).first()
    if user:
        raise ValidationError('Channel Name is already in use.')


class SignUpForm(FlaskForm):
    ChannelName = StringField(
        'channel_name', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    FullName = StringField('Full Name', validators=[DataRequired()])
