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




  mcr = Video(
    user_id=3, title="My Chemical Romance - Welcome To The Black Parade [Official Music Video] [HD]", description=""" Watch the official music video for Welcome To The Black Parade by My Chemical Romance remastered in HD to celebrate the 15th anniversary of the album The Black Parade.

🔔 Subscribe to the channel: https://youtube.com/c/mychemicalroman...

Download/stream here: https://mcr.lnk.to/tbp

Follow My Chemical Romance:
Web: https://mychemicalromance.com
Instagram: https://instagram.com/mychemicalromance
Facebook: https://facebook.com/mychemicalromance
Twitter: https://twitter.com/mcrofficial

My Chemical Romance  is a rock band renowned for their hits “Welcome To The Black Parade,” “Teenagers,” “Helena,” “Famous Last Words,” “The Ghost Of You,” “Na Na Na,” and “I Don’t Love You.” They worked with artists like Brian May, Green Day, and The Used — amassing billions of global streams and received multi-platinum certifications.

Lyrics:
When I was a young boy, my father
Took me into the city to see a marching band
He said, "Son, when you grow up would you be
The savior of the broken, the beaten and the damned?"
He said, "Will you defeat them? Your demons
And all the non-believers, the plans that they have made?
Because one day, I'll leave you a phantom
To lead you in the summer to join the black parade..."
When I was a young boy, my father
Took me into the city to see a marching band
He said, "Son, when you grow up would you be
The savior of the broken, the beaten and the damned?"

Sometimes I get the feeling she's watching over me
And other times I feel like I should go
And through it all, the rise and fall, the bodies in the streets
And when you're gone, we want you all to know

We'll carry on, we'll carry on, and though you're
Dead and gone, believe me, your memory will carry on
We'll carry on,and in my heart I can't contain it
The anthem won't explain it

A world that sends you reeling from decimated dreams
Your misery and hate will kill us all
So paint it black and take it back, let's shout it loud and clear
Defiant to the end we hear the call

To carry on, we'll carry on, and though you're
Dead and gone, believe me, your memory will carry on
We'll carry on,and though you're broken and defeated
Your weary widow marches

On and on, we carry through the fears (Oh, oh, oh)
Disappointed faces of your peers(Oh, oh, oh)
Take a look at me, 'cause I could not care at all

Do or die, you'll never make me
Because the world will never take my heart
Go and try, you'll never break me
We want it all, we wanna play this part
I won't explain or say I'm sorry
I'm unashamed, I'm gonna show my scars
Give a cheer for all the broken
Listen here, because it's who we are
I'm just a man, I'm not a hero
Just a boy, who had to sing this song
I'm just a man, I'm not a hero
I don't care!

We'll carry on, we'll carry on, and though you're
Dead and gone, believe me, your memory will carry on
We'll carry on,and though you're broken and defeated
Your weary widow marches

Do or die, you'll never make me
Because the world will never take my heart
Go and try, you'll never break me
We want it all, we wanna play this part(We'll carry on!)
Do or die, you'll never make me(We'll carry on!)
Because the world will never take my heart(We'll carry on!)
Go and try, you'll never break me(We'll carry-)
We want it all, we wanna play this part(We'll carry on...)

#OfficialMusicVideo #MCR #WelcomeToTheBlackParade #WeAreWarnerRecords""", thumbnail="https://i.ytimg.com/vi/RRKJiM9Njr8/maxresdefault.jpg",
    video_data="https://res.cloudinary.com/isaaccloud10/video/upload/v1661105008/YourTv/media.io_1dd35565469448b19ca53796c3cd8c1a_lj6uvd.mp4",
    updated_at=(datetime.now())
    )

  mcr2 = Video(
    user_id=3, title="My Chemical Romance - Helena [Official Music Video]",  description=""" Watch the official music video for Helena by My Chemical Romance from the album Three Cheers for Sweet Revenge.
🔔 Subscribe to the channel: https://youtube.com/c/mychemicalroman...

Download/stream here: https://mcr.lnk.to/threecheers

Follow My Chemical Romance:
Web: https://mychemicalromance.com
Instagram: https://instagram.com/mychemicalromance
Facebook: https://facebook.com/mychemicalromance
Twitter: https://twitter.com/mcrofficial

My Chemical Romance  is a rock band renowned for their hits “Welcome To The Black Parade,” “Teenagers,” “Helena,” “Famous Last Words,” “The Ghost Of You,” “Na Na Na,” and “I Don’t Love You.” They worked with artists like Brian May, Green Day, and The Used — amassing billions of global streams and received multi-platinum certifications.

Lyrics:
Long ago, just like the hearse you die to get in again
We are so far from you
Burning on, just like the match you strike to incinerate
The lives of everyone you know

And what's the worst you take (Worst you take)
From every heart you break? (Heart you break)
And like the blade you stain (Blade you stain)
Well, I've been holding on tonight

What's the worst that I can say?
Things are better if I stay
So long and goodnight
So long, not goodnight

Came a time when every star fall brought you to tears again
We are the very hurt you sold

And what's the worst you take (Worst you take)
From every heart you break? (Heart you break)
And like the blade you stain (Blade you stain)
Well, I've been holding on tonight

What's the worst that I can say?
Things are better if I stay
So long and goodnight
So long and goodnight
Well, if you carry on this way
Things are better if I stay
So long and goodnight
So long and goodnight

(Can you hear me?)
(Are you near me?)
(Can we pretend to leave, and then)
(We'll meet again)
When both our cars collide?

What's the worst that I can say?
Things are better if I stay
So long and goodnight
So long and goodnight
Well, if you carry on this way
Things are better if I stay
So long and goodnight
So long and goodnight

#OfficialMusicVideo #MCR #Helena #WeAreWarnerRecords """, thumbnail="https://i.ytimg.com/vi/UCCyoocDxBA/maxresdefault.jpg",
    video_data="https://res.cloudinary.com/isaaccloud10/video/upload/v1660947627/YourTv/media.io_35a41eef291a434d9fb0e6232872759c_n5mpjx.mp4",
    updated_at=(datetime.now())
    )

  mcr3 = Video(
    user_id=3, title="My Chemical Romance - The Ghost Of You [Official Music Video]",  description=""" Watch the official music video for The Ghost Of You by My Chemical Romance from the album Three Cheers for Sweet Revenge.
🔔 Subscribe to the channel: https://youtube.com/c/mychemicalroman...

Download/stream here: https://mcr.lnk.to/threecheers

Follow My Chemical Romance:
Web: https://mychemicalromance.com
Instagram: https://instagram.com/mychemicalromance
Facebook: https://facebook.com/mychemicalromance
Twitter: https://twitter.com/mcrofficial

My Chemical Romance  is a rock band renowned for their hits “Welcome To The Black Parade,” “Teenagers,” “Helena,” “Famous Last Words,” “The Ghost Of You,” “Na Na Na,” and “I Don’t Love You.” They worked with artists like Brian May, Green Day, and The Used — amassing billions of global streams and received multi-platinum certifications.

Lyrics:
I never said I'd lie in wait forever
If I died, we'd be together, ow
I can't always just forget her
But she could try

At the end of the world or the last thing I see
You are never coming home, never coming home
Could I? Should I?
And all the things that you never ever told me
And all the smiles that are ever, ever

Ever get the feeling that you're never all alone?
And I remember now
At the top of my lungs in my arms, she dies, she dies

At the end of the world or the last thing I see
You are never coming home, never coming home
Could I? Should I?
And all the things that you never ever told me
And all the smiles that are ever gonna haunt me

Never coming home, never coming home
Could I? Should I?
And all the wounds that are ever gonna scar me
For all the ghosts that are never gonna catch me

If I fall
If I fall down
Whoa, whoa, whoa, whoa
Whoa, whoa, whoa, whoa

At the end of the world or the last thing I see
You are never coming home, never coming home
Never coming home, never coming home
And all the things that you never ever told me
And all the smiles that are ever going to haunt me

Never coming home, never coming home
Could I? Should I?
And all the wounds that are ever gonna scar me
For all the ghosts that are never gonna...

#OfficialMusicVideo #MCR #TheGhostOfYou #WeAreWarnerRecords """, thumbnail="https://i.ytimg.com/vi/uCUpvTMis-Y/maxresdefault.jpg",
    video_data="https://res.cloudinary.com/isaaccloud10/video/upload/v1661106063/YourTv/videoplayback_jiq7iu.mp4",
    updated_at=(datetime.now())
    )

  jakeP_video = Video(
    user_id=5, title="Jake Paul vs Tyron Woodley Face Off",
    description="""AUGUST 28TH ON SHOWTIME

🔴SUBSCRIBE ➤ http://bit.ly/SUB2JAKEPAUL

INSTAGRAM ➤  https://www.instagram.com/JakePaul
TWITTER ➤  http://twitter.com/JakePaul
TIKTOK ➤ https://www.tiktok.com/@jakepaul?lang=en""",
    thumbnail="https://cdn.vox-cdn.com/thumbor/9s_Mi7hgk0yZiGPogoHFVnFAWec=/0x0:3409x2322/1200x800/filters:focal(1433x889:1977x1433)/cdn.vox-cdn.com/uploads/chorus_image/image/69402918/1321564366.5.jpg",
    video_data="https://res.cloudinary.com/isaaccloud10/video/upload/v1661306982/YourTv/jake-paul-vs-tyron-woodley-face-off_cpqpio.mp4",
    updated_at=(datetime.now())
  )

  jakeP_video2 = Video(
    user_id=5, title="All Access - Paul vs. Woodley 2 - Part 1",
    description="""
     I'm coming to TAMPA on Dec. 18t!. Watch me fight Vs Tommy Fury live on Showtime PPV.

PPV Live-
December 18th live on pay-per-view #PaulWoodley II Leave No Doubt

🇺🇸 SHOWTIME + cable and sat
🇬🇧 FITE.tv
🇨🇦 FITE.tv +local cable and sat
🇦🇺 FITE.tv + MainEvent / Foxtel
🇳🇿 FITE.tv
Europe FITE.tv
Asia FITE.tv
Africa FITE.tv
Middle East FITE.tv



TICKETS ON SALE NOW ➤  https://bit.ly/PAULTAMPA
INSTAGRAM ➤ https://www.instagram.com/jakepaul/
THE PROBLEM BOT ➤ https://www.instagram.com/theproblembot/
TWITTER ➤  http://twitter.com/JakePaul

#PaulWoodley2 is SATURDAY at 9PM ET/6PM PT On SHOWTIME.

#SHOSports #ShowtimePPV #JakePaul #TyronWoodley

text me im bored - 310-870-3349

🔴SUBSCRIBE ➤ http://bit.ly/SUB2JAKEPAUL
↪ watch sum mo stuff➤  LINK HERE

INSTAGRAM ➤  https://www.instagram.com/JakePaul
TWITTER ➤  http://twitter.com/JakePaul

⚠ WARNING ⚠
Please be warned (and we cannot possibly stress this enough); under no circumstances should any challenges, stunts, or pranks be attempted by any of our viewers. All challenges, stunts, and pranks are performed by trained professionals in a controlled environment and are for entertainment purposes only. Again, do not try anything you see in this content at home and always consult a parent or adult with any questions or concerns.
    """,
    thumbnail="https://i.ytimg.com/vi/EJjJank-mo0/maxresdefault.jpg",
    video_data="https://res.cloudinary.com/isaaccloud10/video/upload/v1661309581/YourTv/all-access-paul-vs.woodley-2-part-1_dpykpp.mp4",
    updated_at=(datetime.now())
  )

  jakeP_video3 = Video(
  user_id=5, title='JAKE PAUL - DANA WHITE DISS TRACK (Official Music Video)',
  description="""
  All proceeds from this video go to underpaid fighters in the UFC who get paid the $12k minimum.


INSTAGRAM: https://www.instagram.com/JakePaul
TWITTER: http://twitter.com/JakePaul
  """,
  thumbnail='https://i.ytimg.com/vi/UycLZUh7Mhc/maxresdefault.jpg',
  video_data='https://res.cloudinary.com/isaaccloud10/video/upload/v1661309838/YourTv/jake-paul-dana-white-diss-track-official-music-video_eq0vm1.mp4',
  updated_at=(datetime.now())
 )

  weeknd_video = Video(
  user_id=6, title='The Weeknd - Blinding Lights (Official Video)',
  description="""
  Official music video for The Weeknd "Blinding Lights" - available everywhere now: http://theweeknd.co/blindinglightsYD

►Subscribe to The Weeknd on YouTube: http://theweeknd.co/subscribeYD

►Get exclusive merch: shop.theweeknd.com

►Follow The Weeknd:
https://twitter.com/theweeknd
https://www.facebook.com/theweeknd
https://www.instagram.com/theweeknd
https://www.theweeknd.com
Subscribe to YouTube Music: http://theweeknd.co/blindinglightsYD/...

Director: Anton Tammi

Production Company: Somesuch
Executive Producer: Saskia Whinney
Producer: Sarah Park

Director of Photography: Oliver Millar
2nd Unit DP: Devin “Daddy” Karringten
Steadicam Op: Niels Lindelien
Gaffer: Nizar Najm
Key Grip: Marlow Nunez
Production Designer: Adam William Wilson

1st AD: Kenneth Taylor

Editor: Janne Vartia & Tim Montana
Post Production Supervisor: Alec Ernest
VFX: Mathematic
Colorist: Nicke Jacobsson
Sound Designer: Akseli Soini
3D: Oscar Böckerman
Title Design: Aleksi Tammi


►"Blinding Lights" Lyrics:

Yeah
I been tryna call
I been on my own for long enough
Maybe you can show me how to love, maybe
I'm going through withdrawals
You don't even have to do too much
You can turn me on with just a touch, baby
I look around and Sin City's cold and empty (oh)
No one's around to judge me (oh)
I can't see clearly when you're gone
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
I said, ooh, I'm drowning in the night
Oh, when I'm like this, you're the one I trust
Hey, hey, hey
I'm running out of time
'Cause I can see the sun light up the sky
So I hit the road in overdrive, baby
Oh, the city's cold and empty (oh)
No one's around to judge me (oh)
I can't see clearly when you're gone
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
I said, ooh, I'm drowning in the night
Oh, when I'm like this, you're the one I trust
I'm just walking by to let you know (by to let you know)
I can never say it on the phone (say it on the phone)
Will never let you go this time (ooh)
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
Hey, hey, hey
Hey, hey, hey
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch

#TheWeeknd #BlindingLights


Music video by The Weeknd performing Blinding Lights. © 2020 The Weeknd XO, Inc., manufactured and marketed by Republic Records, a division of UMG Recordings, Inc.
  """,
  thumbnail='https://i.ytimg.com/vi/4NRXx6U8ABQ/maxresdefault.jpg',
  video_data='https://res.cloudinary.com/isaaccloud10/video/upload/v1661310581/YourTv/the-weeknd-blinding-lights-official-video_ajb6p1.mp4',
  updated_at=(datetime.now())
 )

  weeknd_video2 = Video(
  user_id=6, title='The Weeknd - Save Your Tears (Official Music Video)',
  description="""
  Official music video by The Weeknd performing "Save Your Tears"– 'After Hours' available everywhere now: http://theweeknd.co/afterhoursYD

►Subscribe to The Weeknd on YouTube: http://theweeknd.co/subscribeYD

►Get exclusive merch: shop.theweeknd.com

►Follow The Weeknd:
https://twitter.com/theweeknd
https://www.facebook.com/theweeknd
https://www.instagram.com/theweeknd
https://www.theweeknd.com

Directed by Cliqua
Produced by Roisín Audrey Moloney
Executive Producer: Jerad Anderson
Production Company: Florence
Abel’s Costume Designer: Matt Henson
Prosthetics: Mike Marino, Prosthetic Renaissance
Director of Photography: Xiaolong Liu
Production Designer: Annie Sperling
1st AD: Mike Alberts
Production Supervisor: Tori Storosh
Production Supervisor: Joe Keenan
Assist. Production Supervisor: Linda Nhem
Cast Costume Designer: Lisa Madonna
Gaffer: Matt Ardine
Key Grip: Jon Booker
Camera Operator Nick Muller
Steadicam Colin MacDonnell
Editor: Miles Trahan
Color: Matt Osbourne @ Company 3
Sound Design: Christian Stropko
VFX: Buralqy + MADNOMAD
Online: Sunset Edit
Titles: Bradley Pinkerton

Lyrics:

Ooh
Na na, yeah
I saw you dancing in a crowded room
You look so happy when I'm not with you
But then you saw me, caught you by surprise
A single teardrop falling from your eye
I don't know why I run away
I make you cry when I run away
You could've asked me why I broke your heart
You could've told me that you fell apart
But you walked past me like I wasn't there
And just pretended like you didn't care
I don't know why I run away
I make you cry when I run away
Take me back 'cause I wanna stay
Save your tears for another
Save your tears for another day
Save your tears for another day
So
I made you think that I would always stay
I said some things that I should never say
Yeah, I broke your heart like someone did to mine
And now you won't love me for a second time
I don't know why I run away, oh, girl
Said I make you cry when I run away
Girl, take me back 'cause I wanna stay
Save your tears for another
I realize that I'm much too late
And you deserve someone better
Save your tears for another day (Ooh, yeah)
Save your tears for another day (Yeah)
I don't know why I run away
I make you cry when I run away
Save your tears for another day, ooh, girl (Ah)
I said save your tears for another day (Ah)
Save your tears for another day (Ah)
Save your tears for another day (Ah)

#TheWeeknd #SaveYourTears #AfterHours

Music video by The Weeknd performing Save Your Tears. © 2021 The Weeknd XO, Inc., manufactured and marketed by Republic Records, a division of UMG Recordings, Inc.

http://vevo.ly/7MOdnq

  """,
  thumbnail='https://i.ytimg.com/vi/XXYlFuWEuKI/maxresdefault.jpg',
  video_data='https://res.cloudinary.com/isaaccloud10/video/upload/v1661311199/YourTv/the-weeknd-out-of-time-official-video_iztbgt.mp4',
  updated_at=(datetime.now())
 )

  weeknd_video3 = Video(
  user_id=6, title='The Weeknd - Out of Time (Official Audio)',
  description="""
  ‘Dawn FM’ available now: http://theweeknd.co/dawnfm

►Subscribe to The Weeknd on YouTube: http://theweeknd.co/subscribeYD

►Get exclusive merch: shop.theweeknd.com

►Follow The Weeknd:
https://twitter.com/theweeknd
https://www.facebook.com/theweeknd
https://www.instagram.com/theweeknd
https://www.theweeknd.com


Music video by The Weeknd performing Out of Time (Audio). © 2022 The Weeknd XO, Inc., marketed by Republic Records, a division of UMG Recordings, Inc.

  """,
  thumbnail='https://i.ytimg.com/vi/kxgj5af8zg4/maxresdefault.jpg',
  video_data='https://res.cloudinary.com/isaaccloud10/video/upload/v1661311199/YourTv/the-weeknd-out-of-time-official-video_iztbgt.mp4',
  updated_at=(datetime.now())
 )

#   template_video = Video(
#   user_id=0, title='',
#   description="""
#   """,
#   thumbnail='',
#   video_data='',
#   updated_at=(datetime.now())
#  )

#   template_video = Video(
#   user_id=0, title='',
#   description="""
#   """,
#   thumbnail='',
#   video_data='',
#   updated_at=(datetime.now())
#  )

#   template_video = Video(
#   user_id=0, title='',
#   description="""
#   """,
#   thumbnail='',
#   video_data='',
#   updated_at=(datetime.now())
#  )

  db.session.add(demo_video)
  db.session.add(beast_video)
  db.session.add(beast_video2)
  db.session.add(beast_video3)
  db.session.add(mcr)
  db.session.add(mcr2)
  db.session.add(mcr3)
  db.session.add(jakeP_video)
  db.session.add(jakeP_video2)
  db.session.add(jakeP_video3)
  db.session.add(weeknd_video)
  db.session.add(weeknd_video2)
  db.session.add(weeknd_video3)

  db.session.commit()

def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()
