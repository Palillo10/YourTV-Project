from .db import db
from datetime import datetime


class Like(db.Model):
  __tablename__ = 'likes'


  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  video_id = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)

  user = db.relationship('User', back_populates="likes")
  video = db.relationship('Video', back_populates="likes")
