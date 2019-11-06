import React from 'react';

import Emoji from 'a11y-react-emoji';

import WordLink from '../components/WordLink';
import { interestObjects } from './interests';
import ceramicsPhotoElements from './ceramicsPhotoElements';
import illustratorPhotoElements from './illustratorPhotoElements';
import photoshopPhotoElements from './photoshopPhotoElements';
import photographyPhotoElements from './photographyPhotoElements';
import mechKeebPhotoElements from './mechKeebPhotoElements';

export const interestTagDefinitions = {
  Art: {
    description: (
      <>
        Just like virtually everyone, I was introduced to art at a young age.
        Through my friends, school, and family I was exposed to different art
        forms; be it my friend&apos;s MS Paint pixel art, Andy Warhol&apos;s
        screen prints, or my grandmother&apos;s watercolors, they were all
        intriguing and fun. Over the years, several art forms really captured
        me: <WordLink {...interestObjects.Ceramics} /> for its utility,{' '}
        <WordLink {...interestObjects.Photography} /> for the moment it
        captures, and digital art for how much control given over the medium
        (not to mention CTRL+z for mistakes).
      </>
    ),
  },
  Entertainment: {
    description: (
      <>
        I mean, who doesn&apos;t like some form of entertainment?{' '}
        <WordLink {...interestObjects.Music} /> is definitely my favorite form
        because it can be enjoyed just about anywhere, and concerts are unlike
        anything I have experienced elsewhere. Nonetheless, I find{' '}
        <WordLink {...interestObjects.Movies} /> and{' '}
        <WordLink {...interestObjects['Video Games']} /> to be a great way to
        kick back and enjoy some time with family and friends after work.
      </>
    ),
  },
  Technology: {
    description: (
      <>
        Growing up with a CRT with a built in web cam as my shiny main display I
        had no idea things could get much better than that. Technology has
        continued to surprise me and I&apos;ve enjoyed keeping up with the
        trends, refinements, and new developments. I&apos;m always curious what
        is right around the corner.
      </>
    ),
  },
};

export const interestPageData = {
  Ceramics: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I had not expected to fall in love with
            ceramics when I first was introduced to it back in 2014. I was
            digitally focussed at the time, tinkering with{' '}
            <WordLink {...interestObjects.Photoshop} /> mostly, and the shine of
            physical art lost its luster around early high school. However, I
            had just moved and after all of the change I wanted to try something
            new. My mom found that we had a{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://communityartscenter.org"
            >
              Community Arts Center
            </a>{' '}
            in our area, so we decided I should give a ceramics class a shot.
            Despite the challenge of centering the clay and patience required to
            bring my ideas to life, I was hooked.
            <div className="new-line" />
            <div className="tab" />
            Since then I have taken a handful of classes both during school and
            my internships, but most recently I threw at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bklynclay/"
            >
              BKLYN CLAY
            </a>{' '}
            in NYC. I truly found my love for mug making there! Some say I may
            have went overboard on the quantity, but I felt they were the right
            challenge: making an appropriately sized vessel, pulling a proper
            handle, and attaching it comfortably. Not to mention, the colors at
            BKLYN CLAY were phenomenal!
          </>
        ),
      },
    ],
    media: {
      albums: [...ceramicsPhotoElements],
    },
  },
  Photography: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            Ever since I was young I enjoyed photography, or at least some form
            of it. My first film camera was an odd one: It had 4 lenses in 2x2
            grid, and would shoot all four one after the other to capture frame
            by frame motion of some action shot. It was quite the camera. Years
            later, after using either my mom&apos;s point and shoot digital
            camera, or my iPod&apos;s camera, I got a Digital Fujifilm from
            Costco. That camera, strapped with a 30x zoom nobody asked for
            became my main device. I took it everywhere with me. But as I grew
            older, I knew that it was lacking that sturdy feeling I recalled
            from trying out my dad&apos;s Canon 50D. Sooner or later, he
            upgraded, and I got the old guy and really got into photography. I
            shot RAW and imported it into Adobe Lightroom to give the shots new
            life. I love getting in and tweaking every part of my shot until it
            looks just the way I want it.
            <div className="new-line" />
            <div className="tab" />
            Today, I am still rocking that 50D and have no plans to upgrade (I
            do NOT have the money for that). For now, I&apos;ll just use{' '}
            <WordLink {...interestObjects.Photoshop} /> to correct the dead
            pixels and shoot with it until the shutter gives up on me.
            Here&apos;s to hoping that won&apos;t be anytime soon{' '}
            <Emoji symbol="🙏" label="pray" />
          </>
        ),
      },
    ],
    media: {
      albums: [...photographyPhotoElements],
    },
  },
  Illustrator: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            After getting comfortable with{' '}
            <WordLink {...interestObjects.Photoshop} punc="," /> I noticed its
            limitaions and looked for something that allowed me to create easily
            scaled works. Starting in 2018 I was playing around with
            Illustrator. Thanks to the help of my coworker and friend{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.dinahbaergas.com"
            >
              Dinah Baergas
            </a>
            , I was able to make real progress picking it up and using it
            properly. Since then I have done plenty personal work designing
            stickers and reworking my logo, and semi-professional work designing
            my team&apos;s logo at Amplify.
          </>
        ),
      },
    ],
    media: {
      albums: [...illustratorPhotoElements],
    },
  },
  Photoshop: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            Starting in High School with my computer graphics class, I have been
            using Photoshop off and on again for years. When I found out I could
            add or remove things in photos, I was hooked. It ties in nicely with
            my interest in <WordLink {...interestObjects.Photography} /> and I
            have used it to fix images or convert them into something completely
            new. Photoshop allowed me to start my interest in digital art, and
            even make my first personal logo.
          </>
        ),
      },
    ],
    media: {
      albums: [...photoshopPhotoElements],
    },
  },
  Music: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I love music! I remember the first time I
            heard about Spotify when it was releasing in the UK, I was already
            signing up for their open invitation to the service. I even
            rationalized to my parents that I will be listening to more than one
            album a month, which usually came out to be $10 dollars (the same
            price of Spotify). They were sold, and I have been listening to mass
            amounts of music since.
            <div className="new-line" />
            <div className="tab" />I have mainly enjoyed Modern Rock, with bands
            like Cage the Elephant, Arctic Monkeys, and Awolnation. However,
            this is a small slice of all that I enjoy listening to. The linked
            playlists are just a few that I have put together over the years.
            Awol Dragons, specifically, is a culmination of years of
            Modern/Alt/Indie Rock that I have been updating since 2013.
            <div className="new-line" />
            <div className="tab" />
            Music has always been an outlet for me, and the day ahead determines
            what I end up listening to. As I write this I&apos;m hanging out
            with some Bon Iver, sipping some coffee. And I&apos;m betting that
            I&apos;ll be jamming to some Muse tonight when I get to work.
          </>
        ),
      },
    ],
    media: {
      playlistGroups: [
        {
          groupTitle: null,
          playlists: [
            {
              playlistURI: 'spotify:playlist:0U9YVaWab1fW0N0qcx9d1d',
              title: 'Awol Dragons',
            },
            {
              playlistURI: 'spotify:playlist:3DUAv4ZHasMtMw2wTo74FX',
              title: 'Run.sh',
            },
            {
              playlistURI: 'spotify:playlist:4A3BizRP5tNBHAutmpu392',
              title: 'Good Feels',
            },
          ],
        },
      ],
    },
  },
  Movies: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I really enjoy a good action movie. Kill
            Bill, John Wick, and Hot Fuzz are probably my top movies in the
            genre. They all are a bit over the top, but I think that adds to the
            movie&apos;s entertainment. They do the action so well, and I get so
            involved in all that is happening, that when they take a moment for
            us to catch our breath and recollect our thoughts, they become
            funny. Almost like when you instinctually dodge an unexpected ball
            flying your way: When you realize what just happened, you can&apos;t
            help yourself but laugh at the situation. I have found that contrast
            between tension and relaxation to be so enjoyable.
            <div className="new-line" />
            <div className="tab" />I think just beyond what is going on
            visually, the <WordLink {...interestObjects.Music} /> and sound
            effects can add so much to a scene. Tying a powerful song to an
            emotional scene can enhance both the song and scene. And the level
            of detail that an Edgar Write film has in terms of music and sound
            effects is incredible. The beat of the song matching the actions in
            Baby Driver, or the camera focus sound as the Police Chief squints
            at Simon Pegg in Hot Fuzz gets me every time. So well done, and
            without that, the movies just wouldn&apos;t be on the same level as
            they are now.
            <div className="new-line" />
            <div className="tab" />
            While action is my favorite genre, I understand how vast and varied
            the world of movies is, and try out new and unexpected movies. I was
            never so into dramas, but when I found out Bo Burnham was Directing
            Eigth Grade I just had to give it a watch. Wow, what a movie I had
            never expected to love.
          </>
        ),
      },
    ],
  },
  'Video Games': {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I grew up playing games on the PlayStation 2
            and XBOX. I have a ton of good memories staying up late with friends
            playing after school. It was nearly a daily ritual to play with
            them, but as I started to think about University, I knew I had to
            put school first, and my time spent on video games withered.
            <div className="new-line" />
            <div className="tab" />
            By the time I was in University I mainly played{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
            >
              CS:GO
            </a>
            , which my friends and I bonded over around freshmen year. I soon
            found that I didn&apos;t have much time to sink long hours into a
            game, so I got interested in games my friends and I could quickly
            pick up and put down. We got really into{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cleverendeavourgames.com/ultimate-chicken-horse"
            >
              Ultimate Chicken Horse
            </a>
            ,{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jackboxgames.com/party-pack-three/"
            >
              Jackbox Party Pack 3
            </a>
            , and a couple other multiplayer games.
            <div className="new-line" />
            <div className="tab" />
            After the bulk of my school was over and I was either Co-Oping or
            taking less Computer Science heavy semesters, I found I had some
            more time to try out new games. I got a Nintendo Switch and upgraded
            my desktop. Lately I find myself occasionally playing{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.zelda.com/breath-of-the-wild/"
            >
              Zelda: Breath of the Wild
            </a>
            ,{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://subsetgames.com/itb.html"
            >
              Into the Breach
            </a>
            , and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.satisfactorygame.com/"
            >
              Satisfactory
            </a>{' '}
            when I have some time to spare in my day.
          </>
        ),
      },
    ],
  },
  'Mechanical Keyboards': {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            Ever since middle school I wanted to build my own computer, which I
            did eventually get around to. I put all of my money into the
            computer itself and skimped out on the peripherals. I was using some
            dinky old membrane keyboard and an uncomfortable mouse, but I was
            happy to have built a computer of my own. I was so excited about my
            new machine that I shared it with everyone I could, and soon found
            out that there was more to the desktop computer experience than the
            tower and screen.
            <div className="new-line" />
            <div className="tab" />A friend of mine had a Razer Black Widow back
            in the day, and the moment I felt the click of the keys, I knew I
            was missing out. Fast forward a year or so, I had a Black Widow of
            my own and I was happy. Sure it was loud, and my family often asked
            me to stop playing games late into the night, but the feeling of
            typing on it was great. It served me well for a long while, and
            eventually I did start to feel bad that it was so loud. I&apos;d
            often stay up late working on homework as my roommate slept, and I
            tried to click the keys ever so gently, but it never fully stifled
            them. I just couldn&apos;t part with it; beyond the sound, it was
            still functioning fine.
            <div className="new-line" />
            <div className="tab" />
            Eventually some keys started to get stuck and I realized I
            didn&apos;t need such a bulky keyboard, so I looked into
            alternatives and wound up in the DIY realm. I had soldered before,
            and I like being able to make things my own, so I thought it was a
            no brainer. I got my first build from{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sentraq.com/"
            >
              Sentraq
            </a>{' '}
            in Feb 2019, and the rest is history.
            <div className="new-line" />
            <div className="tab" />I enjoyed picking out the parts, putting it
            together, and even customizing the firmware by adding my own configs
            to a forked{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wmccall/qmk_firmware"
            >
              QMK Firmware Repo
            </a>
            . I have since convinced some friends to build their own, and it
            brought back good memories of building computers with people back
            when I was just starting out with all of this tech work.
          </>
        ),
      },
    ],
    media: {
      albums: [...mechKeebPhotoElements],
    },
  },
};
