from app.models import db, Video
from datetime import datetime


def seed_videos():
  demo_video = Video(
    user_id=1, title="My Demo Video",  description="This is my demo video", thumbnail="https://thumbs.dreamstime.com/b/demo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg",
    video_data="https://thumbs.dreamstime.com/b/demo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg",
    updated_at=(datetime.now())
    )
  beast_video = Video(
    user_id=4, title="I planted 20 Million Trees around the world", description="With help from people all over the world, we planted over 20 millions trere all around the entire globe.",
    thumbnail="https://i0.wp.com/www.sunnyskyz.com/uploads/2019/12/wa50i-team-trees-20-million-1.jpg", video_data="https://i0.wp.com/www.sunnyskyz.com/uploads/2019/12/wa50i-team-trees-20-million-1.jpg",
    updated_at=(datetime.now())
  )

  bobbie = Video(
    user_id=1, title="HOW DO I USE THIS WEBSITE!!!!!", thumbnail="https://thumbs.dreamstime.com/b/demo-sign-demo-icon-vector-icon-demo-sign-demo-icon-170323550.jpg",
    video_data="https://thumbs.dreamstime.com/b/demo-sign-demo-icon-vector-icon-demo-sign-demo-icon-170323550.jpg",
    updated_at=(datetime.now())
    )

  demo_video2 = Video(
    user_id=1, title="My Second Demo Video",  description="This is second my demo video", thumbnail="https://thumbs.dreamstime.com/b/demo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg",
    video_data="https://thumbs.dreamstime.com/b/demo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg",
    updated_at=(datetime.now())
    )


  db.session.add(demo_video)
  db.session.add(beast_video)
  db.session.add(bobbie)
  db.session.add(demo_video2)

  db.session.commit()

def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()
