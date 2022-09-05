from .db import db
from datetime import datetime

class Video(db.Model):
  __tablename__ = 'videos'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.Text, nullable=True)
  thumbnail = db.Column(db.Text, nullable=True, default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgdtC5sgMG3qe3ktKKoKWBmn4FKVvPKVGfSU-JrUpc4IoANXGPnV0gmbAvr7zzEGn464&usqp=CAU")
  video_data = db.Column(db.Text, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=(datetime.now()))
  updated_at = db.Column(db.DateTime, nullable=False)


  owner = db.relationship('User', back_populates="videos")
  comments = db.relationship('Comment', back_populates="video", cascade="all, delete")
  likes = db.relationship('Like', back_populates="video")

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'title': self.title,
      'description': self.description,
      'thumbnail': self.thumbnail,
      'video_data': self.video_data,
      'created_at': self.created_at,
      'updated_at': self.updated_at,
      'owner': self.owner.to_dict(),
      'likes': [like.to_dict() for like in self.likes],
      'comments': [comment.to_dict() for comment in self.comments]
    }


  def to_dict2(self):
      return {
      'id': self.id,
      'user_id': self.user_id,
      'title': self.title,
      'description': self.description,
      'thumbnail': self.thumbnail,
      'video_data': self.video_data,
      'created_at': self.created_at,
      'updated_at': self.updated_at,
      'owner': self.owner.to_dict(),
      'comments': [comment.to_dict() for comment in self.comments]
      }
