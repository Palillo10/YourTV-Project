from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Like(db.Model):
  __tablename__ = 'likes'

  if environment == "production":
        __table_args__ = {'schema': SCHEMA}


  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  video_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('videos.id')), nullable=False)

  user = db.relationship('User', back_populates="likes")
  video = db.relationship('Video', back_populates="likes")

  def to_dict(self):
    return {
      'id': self.id,
      'user': self.user.to_dict_like(),
      'video': self.video.to_dict_like()
    }
