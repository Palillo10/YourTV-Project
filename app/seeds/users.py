from app.models import db, User
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        full_name='Mr. Demo', channel_name='Demo-lition', bio='I am the demolition man', email='demo@aa.io',
        password='password',  updated_at=(datetime.now())
        )
    marnie = User(
        full_name='Marnie Marns', channel_name='marnie', email='marnie@aa.io',
        password='password',  updated_at=(datetime.now())
        )
    bobbie = User(
        full_name='Bobbie Bill', channel_name='bobbie', email='bobbie@aa.io',
        password='password',  updated_at=(datetime.now())
        )
    beast = User(
        full_name='Jimmy Donaldson', channel_name='Mr. Beast', bio=""" SUBSCRIBE FOR A COOKIE!
            Accomplishments
            - Raised $20,000,000 To Plant 20,000,000 Trees
            - Given millions to charity
            - Donated over 100 cars lol
            - Gave away a private island
            - Given away over 100 ps4s lol
            - Gave away 1 million dollars in one video
            - Counted to 100k
            - Read the Dictionary
            - Watched Dance Till You're Dead For 10 Hours
            - Read Bee Movie Script
            - Read Longest English Word
            - Watched Paint Dry
            - Ubering Across America
            - Watched It's Every Day Bro For 10 Hours
            - Ran a marathon in the world's largest shoes
            - Adopted every dog in a shelter
            You get the point haha


            *Do not email me asking for money, I give away money because it makes me happy :)""",
        email='mrbeast@aa.io', password='thebeasty',  updated_at=(datetime.now())
        )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(beast)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
