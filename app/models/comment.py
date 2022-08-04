from .db import db
from datetime import datetime

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  video_id = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
  body = db.Column(db.Text, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=(datetime.now()))
  updated_at = db.Column(db.DateTime, nullable=False)

  commenter = db.relationship('User', back_populates='comments')
  video = db.relationship('Video', back_populates='comments')

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'video_id': self.video_id,
      'body': self.body,
      'created_at': self.created_at,
      'updated_at': self.updated_at,
      'commenter': self.commenter.to_dict()
    }
