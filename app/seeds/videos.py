from app.models import db, Video
from datetime import datetime


def seed_videos():
  demo_video = Video(
    user_id=1, title="My Demo Video",  description="This is my demo video", thumbnail="https://thumbs.dreamstime.com/b/demo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg",
    video_data="https://thumbs.dreamstime.com/b/demo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg",
    updated_at=(datetime.now())
    )
  beast_video = Video(
    user_id=4, title="I Cleaned The World's Dirtiest Beach #TeamSeas", description="""$1 Donated = 1 Pound Of Trash Out Of The Ocean -  https://teamseas.org/
HELP US REMOVE 30,000,000 POUNDS OF TRASH FROM THE OCEAN BEFORE THE END OF THE YEAR!""",
    thumbnail="https://i.ytimg.com/vi/cV2gBU6hKfY/mqdefault.jpg", video_data="https://res.cloudinary.com/isaaccloud10/video/upload/v1660947627/YourTv/media.io_35a41eef291a434d9fb0e6232872759c_n5mpjx.mp4",
    updated_at=(datetime.now())
  )

  beast_video2 = Video(
    user_id=4, title="We Fed Five Cities in 30 Days!", description="""SUBSCRIBE AND WATCH MORE VIDEOS TO FUND OUR CHARITY!
For your chance to win two seats on one of the FIRST Virgin Galactic flights to space and support a great cause, enter at https://omaze.com/MrBeast.

Just wanted to update you guys on what the charity has been up to :) Thanks for watching, this literally isn't possible without you all!!

p.s. if you would like to sponsor our channel and help feed more people, email sponsorships@beastphilanthropy.org


Beast Philanthropy Video Disclaimer:
This video was produced by Beast Philanthropy Productions, LLC, a North Carolina limited liability company. Any revenue generated for Beast Philanthropy Productions, LLC from this video will be donated to MrCharity, Inc. dba Beast Philanthropy, a North Carolina 501(c)(3) nonprofit corporation.""",
    thumbnail="https://i.ytimg.com/vi/yEBK_Ayeiyc/maxresdefault.jpg", video_data="https://res.cloudinary.com/isaaccloud10/video/upload/v1660950901/YourTv/We_Fed_Five_Cities_in_30_Days_zkpmqw.mp4",
    updated_at=(datetime.now())
  )

  beast_video3 = Video(
    user_id=4, title="Giving School Supplies To The Poorest Schools In America", description="""Special thanks to our friends at Sun-Maid for helping us make the world a better place.
https://www.sunmaid.com/

Beast Philanthropy Video Disclaimer: This video was produced by Beast Philanthropy Productions, LLC, a North Carolina limited liability company. Any revenue generated for Beast Philanthropy Productions, LLC from this video will be donated to MrCharity, Inc. dba Beast Philanthropy, a North Carolina 501(c)(3) nonprofit corporation.""",
    thumbnail="https://www.tubefilter.com/wp-content/uploads/2022/08/mrbeast-school-philanthropy-1400x825.jpg", video_data="https://res.cloudinary.com/isaaccloud10/video/upload/v1660950863/YourTv/Giving_School_Supplies_To_The_Poorest_Schools_In_America_xalruc.mp4",
    updated_at=(datetime.now())
  )

  bobbie = Video(
    user_id=3, title="HOW DO I USE THIS WEBSITE!!!!!", thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgdtC5sgMG3qe3ktKKoKWBmn4FKVvPKVGfSU-JrUpc4IoANXGPnV0gmbAvr7zzEGn464&usqp=CAU",
    video_data="https://thumbs.dreamstime.com/b/demo-sign-demo-icon-vector-icon-demo-sign-demo-icon-170323550.jpg",
    updated_at=(datetime.now())
    )

  demo_video2 = Video(
    user_id=1, title="My Second Demo Video",  description="This is second my demo video", thumbnail="https://thumbs.dreamstime.com/b/demo-sign-demo-icon-vector-icon-demo-sign-demo-icon-170323550.jpg",
    video_data="https://thumbs.dreamstime.com/b/demo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg",
    updated_at=(datetime.now())
    )


  db.session.add(demo_video)
  db.session.add(beast_video)
  db.session.add(beast_video2)
  db.session.add(beast_video3)
  db.session.add(bobbie)
  db.session.add(demo_video2)

  db.session.commit()

def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()
