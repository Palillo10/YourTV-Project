from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    channel_name = db.Column(db.String(40), nullable=False, unique=True)
    bio = db.Column(db.Text, nullable=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    avatar = db.Column(db.Text, nullable=True, default="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png")
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=(datetime.now()))
    updated_at = db.Column(db.DateTime, nullable=False)

    videos = db.relationship('Video', back_populates="owner")
    comments = db.relationship('Comment', back_populates="commenter")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'full_name': self.full_name,
            'channel_name': self.channel_name,
            'bio': self.bio,
            'email': self.email,
            'avatar': self.avatar,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
