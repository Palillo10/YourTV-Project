from app.models import db, User
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        full_name='Mr. Demo', channel_name='Demo-lition', bio='I am the demolition man', email='demo@aa.io', avatar="https://m.media-amazon.com/images/I/61VzKqpMkcL._AC_SY741_.jpg",
        password='password',  updated_at=(datetime.now())
        )


    bts = User(
        full_name='BANGTANTV', channel_name='BANGTANTV', email='bts@aa.io', avatar='https://yt3.ggpht.com/NDWZM_aZQZJ81KRMyctZ5WYJbMIeDXLXBbAYfudK9idNpn7jIiamnj4-_3XIvCvKr1fEU7551A=s88-c-k-c0x00ffffff-no-rj',
        bio='BTS is a Grammy-nominated South Korean group that has been capturing the hearts of millions of fans globally since its debut in June 2013. The members of BTS are RM, Jin, SUGA, j-hope, Jimin, V, and Jung Kook. Gaining recognition for their authentic and self-produced music, top-notch performances, and the way they interact with their fans, BTS has established themselves as “21st century Pop Icons” breaking countless world records.', password='passwordbts',  updated_at=(datetime.now())
        )

    mcr = User(
        full_name='My Chemical Romance', channel_name='My Chemical Romance', email='MyChemicalRomance@aa.io',
        password='passwordmcr', bio=""" My Chemical Romance is considered one of the greatest alternative rock bands of the 2000s. Formed in Jersey City, New Jersey in 2001, the band was led by vocalist Gerard Way and his brother, bassist Mikey Way. The main lineup of My Chemical Romance consisted primarily of the Way brothers, lead guitarist Ray Toro, and rhythm guitarist Frank Lero. The band’s drum and percussion players changed many times over the group’s career, with Matt Pelissier serving from 2001 to 2004, Bob Bryar performing from 2004 to 2010, and James Dewees playing from 2007 to 2013. My Chemical Romance first achieved major success with their debut album I Brought You My Bullets, You Brought Me Your Love, released on Eyeball Records in 2002. The record mainly concerned an exploration of the supernatural, as evidenced in its lead single “Vampires Will Never Hurt You.” The group achieved mainstream success with their album Three Cheers for Sweet Revenge, which was released on Reprise Records in 2004. The music videos of the album’s two lead singles, “I’m Not Okay (I Promise)” and “Helena,” received much play on MTV’s Total Request Live. No biography of My Chemical Romance would be complete without mentioning their 2006 album The Black Parade, which received the greatest critical acclaim of all the group’s works and led to the band’s celebrated The Black Parade World Tour. A rock opera, The Black Parade focused on the nature of life and death, with its lead single, “Welcome to the Black Parade,” featuring the album’s protagonist journeying into the afterlife. My Chemical Romance followed up on the success of The Black Parade with their 2010 album Danger Days: The True Lives of Fabulous Killjoys. The music of My Chemical Romance has been awarded numerous honors over the years, with the group winning six Kerrang! Awards. In March of 2013, the band announced its breakup, thanking their many fans for the years of excitement they enjoyed together. To celebrate their career, My Chemical Romance released the compilation album May Death Never Stop You in 2014, which contained all the group’s major singles from their twelve years of performance.""", updated_at=(datetime.now()),
        avatar='https://yt3.ggpht.com/fSHgmpqFhGzzwRbGgQXFNeFKb-DO5CoN9jk4NCNTCwRLnN-CtIr7sVliFuzQrmlgHhq_dx5W=s88-c-k-c0x00ffffff-no-rj'
        )

    beast = User(
        full_name='Jimmy Donaldson', channel_name='MrBeast', bio=""" SUBSCRIBE FOR A COOKIE!,
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
            avatar='https://yt3.ggpht.com/ytc/AMLnZu84dsnlYtuUFBMC8imQs0IUcTKA9khWAmUOgQZltw=s88-c-k-c0x00ffffff-no-rj',
        email='mrbeast@aa.io', password='thebeasty',  updated_at=(datetime.now())
        )

    jakePaul = User(
        full_name='Jake Paul', channel_name='Jake Paul', email='jakep@aa.io', avatar='https://yt3.ggpht.com/ytc/AMLnZu8VKY4kCs4zCe5Sy1OXx76N-ueN9IVRgc3FY2aJjg=s88-c-k-c0x00ffffff-no-rj',
        bio=""" WHATS UP?! I'm Jake Paul.
24 y/o pro boxer / musical artist

FAHLO ME OTHER SOCIAL MEDIAS
Instagram: jakepaul
Twitter: jakepaul
Snapchat: jakepaul19

Oh... and you can text me: 310-870-3349

Business: brands@jakepaul.com""",
        password='passwordjp',  updated_at=(datetime.now())
        )

    weeknd = User(
        full_name='Abel Makkonen Tesfaye', channel_name='The Weeknd', email='weeknd@aa.io', avatar='https://yt3.ggpht.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s88-c-k-c0x00ffffff-no-rj',
        bio="""A Biography of The Weeknd

 The Weeknd is a talented and popular Ethiopian Hipster R&B artist who hails from the beautiful country of Canada--Ontario in particular. Born on February 16, 1990 under the name of Abel Tesfaye, he felt the pains of a less than ideal child's life while growing up. His father was not around and his mother worked many hours to care for his needs; therefore, his grandmother took the lead in his life. His native language is Amharic since his grandmother did much of his raising. This is a language commonly spoken in Ethiopia.

 At the age of 17, Abel adopted the stage name, "The Weeknd," after he dropped out of his high school. He later met Jeremy Rose (a producer) and the two collaborated to create three different songs: "The Morning," "What You Need" and "Loft Music." While Rose had no interest in keeping these songs, he let Abel have them under one single condition. He had to be credited with the songs should they be distributed. Abel later published these songs on YouTube under his stage name without crediting Jeremy; and these three songs gained enough popularity to spark an interest in The Weeknd. Later on in 2011, he released a mixtape, "House of Balloons," on his website for free and was ultimately nominated for the Polaris Music Prize that year.

 From his first gig at the Mod Club (Toronto) to his performance for the Coachella Festival (Indio, California), The Weeknd has achieved a level of fame and rock-solid fan support that continues to snowball as he attracts hundreds of fans with each passing day. The Weeknd possesses an established and successful career that is full of promise. """,
        password='passwordweeknd',  updated_at=(datetime.now())
        )

    db.session.add(demo)
    db.session.add(bts)
    db.session.add(mcr)
    db.session.add(beast)
    db.session.add(jakePaul)
    db.session.add(weeknd)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
