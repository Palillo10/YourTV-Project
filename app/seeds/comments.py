from app.models import db, Comment
from datetime import datetime


def seed_comments():
  comment1 = Comment(
    user_id=2, video_id=1, body='YOOO, this is a great demo video. Nice Job. Thumbs up', updated_at=(datetime.now())
  )

  comment2 = Comment(
    user_id=4, video_id=2, body='Thanks to everyone  who helped plant all these trees. Much Love', updated_at=(datetime.now())
  )

  comment3 = Comment(
    user_id=3, video_id=2, body='I helped plant all of these', updated_at=(datetime.now())
  )

  comment4 = Comment(
    user_id=1, video_id=2, body='You did an amazing thing here.', updated_at=(datetime.now())
  )

  comment4 = Comment(
    user_id=3, video_id=4, body='Idk even understand what this is supposed to be', updated_at=(datetime.now())
  )

  db.session.add(comment1)
  db.session.add(comment2)
  db.session.add(comment3)
  db.session.add(comment4)

  db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
