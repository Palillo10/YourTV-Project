from app.models import db, Like
from datetime import datetime



def seed_likes():

  demo_like = Like(user_id="1", video_id="1")

  demo_like1 = Like(user_id="2", video_id="1")
  demo_like2 = Like(user_id="3", video_id="1")
  demo_like3 = Like(user_id="4", video_id="1")
  demo_like4 = Like(user_id="5", video_id="1")
  demo_like5 = Like(user_id="1", video_id="2")
  demo_like6 = Like(user_id="2", video_id="2")
  demo_like7 = Like(user_id="3", video_id="2")
  demo_like8 = Like(user_id="2", video_id="3")
  # demo_like9 = Like(user_id="3", video_id="3")
  # demo_like10 = Like(user_id="4", video_id="3")
  # demo_like11 = Like(user_id="5", video_id="3")
  # demo_like12 = Like(user_id="6", video_id="3")
  # demo_like13 = Like(user_id="2", video_id="4")
  # demo_like14 = Like(user_id="3", video_id="4")

  db.session.add(demo_like)
  db.session.add(demo_like1)
  db.session.add(demo_like2)
  db.session.add(demo_like3)
  db.session.add(demo_like4)
  db.session.add(demo_like5)
  db.session.add(demo_like6)
  db.session.add(demo_like7)
  db.session.add(demo_like8)
  # db.session.add(demo_like9)
  # db.session.add(demo_like10)
  # db.session.add(demo_like11)
  # db.session.add(demo_like12)
  # db.session.add(demo_like13)
  # db.session.add(demo_like14)
  db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
