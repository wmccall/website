import React from 'react';

import WordLink from '../components/WordLink';
import { projectObjects } from './projects';
import { skillObjects } from './skills';

import ClearDownloadsRepeat from '../resources/ClearDownloads/ClearDownloadsRepeat.png';
import BulkPing from '../resources/BulkPing/BulkPing.png';

export const projectTagDefinitions = {
  Mobile: {
    description: (
      <>
        Since mobile phones and devices have become virtual extensions of most
        people, I have found it so interesting to constantly be in close contact
        with nearly everyone around me. Being able to put a program on a
        platform so readily available is incredibly exciting. With my only true
        attempt at a mobile specific app being{' '}
        <WordLink {...projectObjects["Q'd Up"]} punc="," /> I understand the
        challenges, but I am still interested in giving new ideas a shot.
      </>
    ),
  },
  Plugin: {
    description: (
      <>
        While I have only limited experience writing plugins,{' '}
        <WordLink {...projectObjects['Quick Search']} punc="," /> I loved the
        quick development time to add a tiny feature that I wanted from Firefox.
        I have yet to run into more desired features, but am prepared to jump
        right in when the next opportunity appears.
      </>
    ),
  },
  Web: {
    description: (
      <>
        I was not expecting to enjoy developing websites as much as I have. My
        initial dive into building a website was a raw{' '}
        <WordLink {...skillObjects.HTML} /> and light{' '}
        <WordLink {...skillObjects.CSS} /> site I can only hope has not been
        captured by Internet Archive&apos;s Wayback Machine. Oh no, it has...
        Anyway, that abomination initially turned me off from trying to develop
        websites because I just hadn&apos;t grasped the power of effective CSS.
        As well, I was more interested in logic and at the time of writing my
        first site, I found that little logic was in play - I was building a
        static site of links. Since then I have learned a thing or two about{' '}
        <WordLink {...skillObjects.JavaScript} /> and{' '}
        <WordLink {...skillObjects.React} /> and now know that I can get
        seriously logical about developing websites.
      </>
    ),
  },
  'Desktop Application': {
    description: (
      <>
        GUI applications, along with CLI applications, were the first
        applications I learned to write since they were the easiest to teach
        computer science with. I enjoyed starting out with writing these
        applications, they were relatively simple and totally exploratory. They
        quickly evolved into a platform for me to add functionality to my
        desktop. Whether it was to clean up my ever growing Downloads folder
        with <WordLink {...projectObjects['Clear Downloads']} punc="," />{' '}
        attempt to &quot;Visually Encrypt&quot; photos with{' '}
        <WordLink {...projectObjects.PictoCrypt} punc="," /> or continually ping
        multiple computers with{' '}
        <WordLink {...projectObjects.BulkPing} punc="," /> I was continually
        attempting to add something new to my computer.
      </>
    ),
  },
};

export const projectPageData = {
  PictoCrypt: {
    discussion: [
      {
        title: 'Visual Photo Encrypter',
        description: (
          <>
            <div className="tab" />
            PictoCrypt was stumbled upon after a &quot;shower thought&quot; I
            had about seeing encryption in action. I started out by researching
            key-based permutations since I wanted a calculated rearrangement of
            pixels based on a password. As I was researching, I found this{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pdfs.semanticscholar.org/3372/5b376865f37d2fc9f71e8c2e0bfbbdaf4a6f.pdf"
            >
              article
            </a>
            , which I then used as my ground work for writing the program. In a
            nutshell, it uses the integer values of the password&apos;s ASCII
            characters to generate the permutation. A permutation should only be
            created by a single string, however I have not tested it enough to
            verify this. The program was not written to be a serious encryption,
            but rather a program to play with the idea of seeing encryption.
            <div className="new-line" />
            <div className="tab" />
            The program is written in <WordLink {...skillObjects['C#']} /> with
            the help of Visual Studio to develop the GUI. To use the program, an
            image must be given along with a password. Once both are supplied,
            the user can click Encrypt to start the permutation process which
            updates in the screen as it progresses. Once it is done, it will
            output an image with the original title and suffix
            &quot;-encrypted&quot; in the original directory. The user may then
            open the encrypted image in the program and decrypt it using the
            same password that was used to encrypt it.
          </>
        ),
        sourceLink: 'https://github.com/wmccall/PictoCrypt',
      },
    ],
    media: {
      albums: null,
      videos: [
        {
          title: 'Demo',
          src:
            'https://www.youtube.com/embed/MMIa-04K1cA?list=PLplNU3zJ099Dnb93CeELZS8AZr3tCuaZ-&rel=0',
        },
      ],
    },
  },
  BulkPing: {
    discussion: [
      {
        title: 'Mass Pinging GUI Utility',
        description: (
          <>
            <div className="tab" />
            BulkPing was designed as a lightweight GUI program to continually
            ping a set of IPs and display whether or not they were accessible.
            This project was given to me when a family member, who works in the
            HVAC industry, told me they wanted a program to let them know if
            their internet accessible controllers were available to quickly
            debug connection issues.
            <div className="new-line" />
            <div className="tab" />
            The program is written entirely in{' '}
            <WordLink {...skillObjects.Java} punc="," /> and compiled into a
            runnable Jar. To use the program, the user can place a file named
            &quot;IPAddresses.txt&quot; in the same directory as the Jar file
            and run the program, which will immediately start pinging the IP
            Addresses in the file. Alternatively the user can run the program
            and then select a file config through the file menu in the program
            to then start pinging those IPs. The ping status is displayed as red
            for unreachable, or green for reachable. Historical information
            about the IPs&apos; statuses can be found in the console log with
            timestamps and color coding.
          </>
        ),
        sourceLink: 'https://github.com/wmccall/BulkPing',
      },
    ],
    media: {
      albums: [
        {
          title: null,
          photoElements: [
            {
              src: BulkPing,
              thumbnail: BulkPing,
              thumbnailWidth: 640,
              caption: 'BulkPing GUI and Console Output',
            },
          ],
        },
      ],
      videos: null,
    },
  },
  'Clear Downloads': {
    discussion: [
      {
        title: 'Downloads Cleaner',
        description: (
          <>
            <div className="tab" />
            Clear Downloads was designed to alleviate the headache of managing
            my downloads. My previous computer had a downloads folder that took
            about a minute to load due to the large volume of files and folders.
            I later built a new computer and decided to design a program that
            would help prevent a situation like that again. This program is
            designed to archive all folders and files into manageable packets or
            remove them altogether on a timed interval or as a one-off run.
            <div className="new-line" />
            <div className="tab" />
            The program is written in <WordLink {...skillObjects['C#']} /> with
            the help of Visual Studio to develop the GUI. To use the program,
            the user specifies what folder to let the program manage, the
            date(s) and time to run the program, whether to archive or recycle
            the files, and whether or not to include already archived folders.
            As it runs it will write to a log feed in the program letting you
            know when it archived or recycled the folder. The program also
            minimizes to the tray where it can be managed and allowed to run.
          </>
        ),
        sourceLink: 'https://github.com/wmccall/ClearDownloads',
      },
    ],
    media: {
      albums: [
        {
          title: null,
          photoElements: [
            {
              src: ClearDownloadsRepeat,
              thumbnail: ClearDownloadsRepeat,
              thumbnailWidth: 640,
              caption: 'Clear Downloads with Repeat Settings',
            },
          ],
        },
      ],
      videos: null,
    },
  },
  'Program Snapshot': {
    discussion: [
      {
        title: 'Program Launcher',
        description: (
          <>
            <div className="tab" />
            Program Snapshot was developed when talking with a coworker about
            features on our OS we wish we had while developing. We were both
            tired of having to manually open our wide array of programs every
            morning when we came back into work, and wanted a way to do that
            quickly. I thought it would be neat if I could write something to
            take a &quot;snapshot&quot; of my running programs when I was fully
            setup so I could then close them when I was done, and open them all
            back up when I needed to get working again. This could effectively
            allow me to switch gears immediately without having to remember what
            programs a certain project required when another project might not.
            <div className="new-line" />
            <div className="tab" />
            This program is written in <WordLink {...skillObjects.Python} /> for
            the GUI and logic, and some command line to capture the running
            programs on the OS. To use the program, the user can manually open
            the specific programs they would like to use for a project. Once
            those programs are up and running, the user can open Program
            Snapshot, specify a name for the current config, and capture the
            running programs. Now these are saved to Program Snapshot, and it
            can be closed. When the user would like to bring all of those
            programs back, they can open up Program Snapshot again, and load a
            specified configuration. The user can also delete unwanted
            configurations.
          </>
        ),
        sourceLink: 'https://github.com/wmccall/ProgramSnapshot',
      },
    ],
    media: {
      albums: null,
      videos: [
        {
          title: 'Demo',
          src:
            'https://www.youtube.com/embed/BFiV6EEOkhY?list=PLplNU3zJ099DH6DDWtH1aVOweD5E9IUKW&rel=0',
        },
      ],
    },
  },
  "Q'd Up": {
    discussion: [
      {
        title: 'Android App for Parties',
        description: (
          <>
            <div className="tab" />
            Q&apos;d Up was inspired by a party I went to where one person had
            their phone hooked up to the speakers and allowed people to put
            songs on the queue. I had to ask her to enter her phone&apos;s
            password each time I wanted to add a song since it would lock after
            a some inactivity. I thought it would be much easier to have a way
            to simply push the song I wanted to her phone, rather than ask her
            to give me access to her entire phone to add a song. This would give
            the host a tool to easily handle song requests while also preventing
            someone from snooping around on the host&apos;s phone.
            <div className="new-line" />
            <div className="tab" />
            The app is written in <WordLink {...skillObjects.Java} /> and
            utilizes Spotify&apos;s API to search, access, and play songs. The
            main focus of the program is to allow many people to connect their
            phone (clients) to one person&apos;s phone (host), then search
            Spotify&apos;s songs and push them over the internet to a queue on
            the server phone. All users have the ability to play/pause, skip
            forward and back, add tracks, and view tracks. In addition, the
            server is able to change the queue order, and remove tracks.
          </>
        ),
        sourceLink: 'https://github.com/wmccall/Q-dUp',
      },
      {
        title: "Q'd Up Router",
        description: (
          <>
            <div className="tab" />
            In addition to this app, there is a Java server running on an{' '}
            <WordLink {...skillObjects.AWS} /> EC2 instance managing the hosts
            and clients. The Java server handles connecting hosts by generating
            a random unique 6 alpha numeric key, and handles clients by
            searching for a host with a given key. If a host is found, the
            server pairs the phones together, and then handles messages sent
            between the phones. The clients may send messages to add new songs
            to the queue, or leave the group when they disconnect. In addition
            the host may send messages to inform the client of a track&apos;s
            playing status, track change, track addition, queue change, or
            disconnect. When the host disconnects, all clients will be
            disconnected.
          </>
        ),
        sourceLink: 'https://github.com/wmccall/JavaQdUpRouter',
      },
    ],
    media: {
      albums: null,
      videos: [
        {
          title: 'Demo',
          src:
            'https://www.youtube.com/embed/giS5Lr0HmzQ?list=PLplNU3zJ099AzyxnwtFRmXde9A45-0UvR&rel=0',
        },
      ],
    },
  },
  'Quick Search': {
    discussion: [
      {
        title: 'Firefox Plugin',
        description: (
          <>
            <div className="tab" />
            Quick Search was written after spending some long nights researching
            for a college assignment. As I fell further into sleep deprivation,
            I found myself repeatedly attempting to use the command CTRL+s to
            search for the highlighted text on Google. Instead of working to
            break that habit, I decided to make a Firefox plugin to allow me to
            exactly that.
            <div className="new-line" />
            <div className="tab" />
            The extension is written in <WordLink
              {...skillObjects.HTML}
            /> and <WordLink {...skillObjects.JavaScript} />. It allows a user
            to select some text on a website, then press CTRL+s to search the
            web for it. The extension also gives the option choose to search
            between Google, DuckDuckGo, or Bing, and will remember the choice
            for the next use. If no there is no highlighted text, the command
            CTRL+s will default to saving the webpage.
          </>
        ),
        sourceLink: 'https://github.com/wmccall/Quick-Search-Extension',
      },
    ],
  },
  'WillMcCall.dev': {
    discussion: [
      {
        title: 'Personal Website',
        description: (
          <>
            <div className="tab" />
            Please, kick off your shoes, and poke around. I&apos;ve put a lot of
            love and time into this site, spending long hours to develop a
            coherent and, hopefully, interesting living resume. Thank you for
            stopping by.
          </>
        ),
        sourceLink: 'https://github.com/wmccall/website',
      },
    ],
  },
};
