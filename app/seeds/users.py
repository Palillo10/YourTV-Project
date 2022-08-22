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
    mcr = User(
        full_name='My Chemical Romance', channel_name='My Chemical Romance', email='MyChemicalRomance@aa.io',
        password='password', bio=""" My Chemical Romance is considered one of the greatest alternative rock bands of the 2000s. Formed in Jersey City, New Jersey in 2001, the band was led by vocalist Gerard Way and his brother, bassist Mikey Way. The main lineup of My Chemical Romance consisted primarily of the Way brothers, lead guitarist Ray Toro, and rhythm guitarist Frank Lero. The band’s drum and percussion players changed many times over the group’s career, with Matt Pelissier serving from 2001 to 2004, Bob Bryar performing from 2004 to 2010, and James Dewees playing from 2007 to 2013. My Chemical Romance first achieved major success with their debut album I Brought You My Bullets, You Brought Me Your Love, released on Eyeball Records in 2002. The record mainly concerned an exploration of the supernatural, as evidenced in its lead single “Vampires Will Never Hurt You.” The group achieved mainstream success with their album Three Cheers for Sweet Revenge, which was released on Reprise Records in 2004. The music videos of the album’s two lead singles, “I’m Not Okay (I Promise)” and “Helena,” received much play on MTV’s Total Request Live. No biography of My Chemical Romance would be complete without mentioning their 2006 album The Black Parade, which received the greatest critical acclaim of all the group’s works and led to the band’s celebrated The Black Parade World Tour. A rock opera, The Black Parade focused on the nature of life and death, with its lead single, “Welcome to the Black Parade,” featuring the album’s protagonist journeying into the afterlife. My Chemical Romance followed up on the success of The Black Parade with their 2010 album Danger Days: The True Lives of Fabulous Killjoys. The music of My Chemical Romance has been awarded numerous honors over the years, with the group winning six Kerrang! Awards. In March of 2013, the band announced its breakup, thanking their many fans for the years of excitement they enjoyed together. To celebrate their career, My Chemical Romance released the compilation album May Death Never Stop You in 2014, which contained all the group’s major singles from their twelve years of performance.""", updated_at=(datetime.now())
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
    db.session.add(mcr)
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
