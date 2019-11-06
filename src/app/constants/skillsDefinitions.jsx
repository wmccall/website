import React from 'react';

import Emoji from 'a11y-react-emoji';

import WordLink from '../components/WordLink';
import { skillObjects } from './skills';
import { projectObjects } from './projects';

export const skillTagDefinitions = {
  Language: {
    description: (
      <>
        I started working with programming languages in 2011 when I took my
        first <WordLink {...skillObjects.Java} /> course. I then spent the most
        of my time working with Java off and on again up until 2016 when I was
        formally introduced to <WordLink {...skillObjects.Python} /> and{' '}
        <WordLink {...skillObjects['C#']} punc="." /> Python quickly became my
        favorite language to work with because of its ease in prototyping and
        quick scripting. Most recently I have been using{' '}
        <WordLink {...skillObjects.JavaScript} /> to work with{' '}
        <WordLink {...skillObjects.React} /> to build webpages personally and
        professionally.
      </>
    ),
  },
  'Web Development': {
    description: (
      <>
        Web development is the latest area of software development that I have
        taken on. With little experience until 2019 I saw web dev work as
        complicated and misaligned with my interests in logic. This changed when
        I worked for Amplify, where I learned about{' '}
        <WordLink {...skillObjects.React} punc="." /> React turned out to be the
        perfect blend of logic and UI for me. It beautifully combined{' '}
        <WordLink {...skillObjects.JavaScript} punc="," />{' '}
        <WordLink {...skillObjects.CSS} punc="," /> and{' '}
        <WordLink {...skillObjects.HTML} /> into a straight forward mechanism
        for building websites, and since then I&apos;ve been hooked on web
        development.
      </>
    ),
  },
  Infrastructure: {
    description: (
      <>
        Putting services on the cloud can be cumbersome, but after working with{' '}
        <WordLink {...skillObjects.AWS} /> in a professional setting, I became
        quite familiar with the tools of the trade. I launched API lambdas
        quickly with <WordLink {...skillObjects.Serverless} punc="," /> deployed
        webpages to S3 buckets using <WordLink {...skillObjects.Terraform} />{' '}
        built AWS Pipelines, and helped shrink down a frustratingly large
        Vagrant server into lightweight <WordLink {...skillObjects.Docker} />{' '}
        images.
      </>
    ),
  },
  'Version Control': {
    description: (
      <>
        Version control has likely become my favorite tool within software
        development. Managing new development branches with{' '}
        <WordLink {...skillObjects.Git} punc="," /> tracking down when a bug
        arose by blaming in <WordLink {...skillObjects.GitHub} punc="," /> and
        hashing out differing thoughts on a PR all made for simple and effective
        collaboration between developers. No more are the days of manually
        searching through code changes between &quot;Project1&quot;,
        &quot;Project1_Final&quot;, &quot;Project1_Final2&quot; and so on.
      </>
    ),
  },
};

export const skillPageData = {
  Python: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I don&apos;t think that I can say it enough;
            I <Emoji symbol="❤" label="love" className="heart" /> Python! Like
            many people, I find it to be an incredibly easy language to work
            with. It makes prototyping new ideas incredibly quick, and offers so
            many tools to make data manipulation a breeze. I personally use it
            for scripts most of the time. When I have a large set of photos from
            a day of taking pictures, I can use a quickly written script to
            update all of the filenames to something better than IMG-XX. It also
            allows for easy interfacing with command line calls, so to
            familiarize myself with that side of Python I worked on my personal
            project <WordLink {...projectObjects['Program Snapshot']} />.
            <div className="new-line" />
            <div className="tab" />I use python a ton in a professional setting
            for our internal <WordLink {...skillObjects.Serverless} />{' '}
            Authentication APIs which opened my eyes to the production value of
            Python. They were so quick to be built and changed when new
            requirements came through. I also used it for writing scripts to
            analyze and manipulate data contained in large CSV files. I was
            tasked with updating outdated tags and analyzing phonemes in our
            assessment texts. It was really neat to have a script that allowed
            me to apply my algorithms&apos; knowledge to figure out the most
            efficient way to work with the data.
            <div className="new-line" />
            <div className="tab" />
            Some people call Python &quot;pseudo code&quot;, but I see it
            something more than that. It&apos;s... production grade pseudo code.
          </>
        ),
      },
    ],
  },
  JavaScript: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            Until January 2019, I had never truly used JavaScript. I used
            scripts here and there for various things on the internet, but
            stayed away from writing it myself for the longest time.
            <div className="new-line" />
            <div className="tab" />
            Then along came my Web Development position at Amplify, and my usage
            of JavaScript boomed. I quickly learned it was similar in nature to{' '}
            <WordLink {...skillObjects.Python} /> with its ease of use and lack
            of typing, which made it an easy language for me to transition to. I
            ended up using it largely for the development of{' '}
            <WordLink {...skillObjects.React} /> webpages and components. The
            components I wrote were full of logic so I got familiar with many
            neat, helpful features at my disposal. Object destructuring? You got
            it. Map, Filter, and Reduce? You bet. Arrow functions? Ohhhh yeah!
            Bless{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/"
            >
              MDN
            </a>{' '}
            <Emoji symbol="🙏" label="pray" /> for all the new knowledge.
          </>
        ),
      },
    ],
  },
  'C#': {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I got really into C# in 2017 around the time
            of my &quot;Concepts of Parallel and Distributed Systems&quot;
            (CoPaDS) course. After spending so much time writing{' '}
            <WordLink {...skillObjects.Java} punc="," /> it was a nice change of
            pace to write something similar, but with friendlier syntax. Writing
            &quot;Console.WriteLine()&quot; vs &quot;System.out.println()&quot;
            just felt more user friendly. Silly example I&apos;m sure; however
            that, among other reasons, lead me to using it for some personal
            projects that I really enjoyed writing.
            <div className="new-line" />
            <div className="tab" />I took my final project from that CoPaDS
            course and used its core functionality as the beginning of my{' '}
            <WordLink {...projectObjects["Q'd Up"]} /> backend server. I later
            converted it to Java for consistency between itself and the Android
            app, but it <div className="italic">served</div> me well for quite
            some time. I then wrote my two Windows GUI programs{' '}
            <WordLink {...projectObjects.PictoCrypt} /> and{' '}
            <WordLink {...projectObjects['Clear Downloads']} /> in C# utilizing
            Visual Studio&apos;s easy front-end development tools. Both were a
            ton of fun to write, and had few headaches attaching the backend to
            the front end.
          </>
        ),
      },
    ],
  },
  Java: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            Java gets a bad wrap. And while I know full well it isn&apos;t the
            most fun to write, it can get the job done pretty well. It was
            especially useful while developing my Android project{' '}
            <WordLink {...projectObjects["Q'd Up"]} punc="." /> It interfaced
            perfectly with Spotify&apos;s APIs and ran natively on the intended
            devices. Later on, while thinking about developing my project{' '}
            <WordLink {...projectObjects.BulkPing} /> I knew I had no idea what
            operating systems it could be running on. I immediately thought,
            &quot;Well, everyone and their mother has a JVM,&quot; and decided
            that I could evade the OS problem by using Java. This proved to be
            effective as I only had to write the program once, and then the
            program was consistent across all platforms, granted that I compiled
            it for the right JVM.
            <div className="new-line" />
            <div className="tab" />
            While it may not be glamorous to work in Java, I do find myself
            coming back to it from time to time, at least just to make sure I
            still know how to write a proper class.
          </>
        ),
      },
    ],
  },
  AWS: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I was first introduced to AWS when I was
            working on the server for my project{' '}
            <WordLink {...projectObjects["Q'd Up"]} />. I initially hosted the
            server on a local machine that was port forwarded through my router.
            This proved to have some difficulties, so I looked into
            alternatives. I found that I could get a free micro EC2 instance as
            a student, and quickly migrated over to it.
            <div className="new-line" />
            <div className="tab" />
            Since then I have used a good bit more of AWS, also interfacing with{' '}
            <WordLink {...skillObjects.Terraform} />. I feel comfortable working
            with AWS (despite its clunky console) and love all of the options I
            have with it.
          </>
        ),
      },
    ],
  },
  Terraform: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I have written Terraform configs to include
            new services to existing professional AWS infrastructure. These
            configs defined what permissions our services had, set up code
            pipelines to invoke PR checkers and deploy applications to higher
            environments.
          </>
        ),
      },
    ],
  },
  Serverless: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            I&apos;m comfortable writing serverless.yml files to setup a lambda
            and define its endpoints. After doing so I am capable of running
            them either locally or off in an environment. I have yet to write
            any in my free time, but I set up an authentication lambda and
            accessed it from other services, and integrated PR checker lambdas I
            designed with our <WordLink {...skillObjects.GitHub} /> repos while
            working at Amplify.
          </>
        ),
      },
    ],
  },
  Docker: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I think Docker is super neat. When I learned
            that you could essentially create a VM without packaging an OS, I
            was intrigued. I quickly became familiar with setting up and running
            Docker containers while in a professional setting. I have yet to
            find a use for them in my personal life, but witnessed the
            production value of switching away from VMs to containers.
          </>
        ),
      },
    ],
  },
  Git: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            Every project I have worked on since 2016 is versioned with Git; I
            cannot escape it. Nor would I want to! I&apos;ve used SVN and CVS
            previously, and they both felt clunky. Git on the other hand felt
            simple yet effective. Everything in Git is quick command, branch
            management is fast and easy, and releases are simple. Heck, if you
            mess up a release, it is also trivial to undo those changes.
            It&apos;s forgiving when you make a mistake, and effortless when
            tracking down changes that might have lead to a mistake. Everything
            I learned about Git started from{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.learnenough.com/git-tutorial/getting_started"
            >
              Learn Enough Git to Be Dangerous
            </a>{' '}
            and I highly recommend it to every developer I&apos;ve met who was
            unfamiliar with this beautiful Version Control program.
            <div className="new-line" />
            <div className="tab" />
            Git makes development easy, and I don&apos;t see anything surpassing
            it soon.
          </>
        ),
      },
    ],
  },
  GitHub: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            GitHub takes the effectiveness of <WordLink
              {...skillObjects.Git}
            />{' '}
            and turns it into something even better. Every project I work on
            ends up in GitHub for two general reasons: code safety, and easy
            collaboration. I never have to worry about losing my code because
            every change I make gets pushed into GitHub soon after it is
            committed. After all the computer trouble I&apos;ve seen in my life
            as an IT Technician, I don&apos;t like to trust that my computer
            will be working just as I left it when I come back to it. GitHub has
            yet to fail me. Furthermore, collaborating with coworkers or
            teammates is super simple on GitHub. Everything is tracked and
            concerns can be discussed right alongside the code so figuring out
            why we did X over Y can be explained with a simple search. In my
            personal and professional life, I try to leverage as much as I can
            out of GitHub, and I&apos;m happy to see how far I&apos;ve come with
            it.
          </>
        ),
      },
    ],
  },
  React: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            This website could not have been possible without React. I have
            attempted multiple times to write a website, but always fell flat on
            my face. I was writing plain <WordLink
              {...skillObjects.HTML}
            /> and <WordLink {...skillObjects.CSS} /> websites, and felt like I
            did not have the control I wanted to make my website interesting or
            useful. Then along came React with its tools that allowed me to bake
            logic directly into my sites. I finally could design websites that
            lined up with the way I think.
            <div className="new-line" />
            <div className="tab" />I love working on a part of a site and
            realizing a piece is repeating itself a lot. I see the opportunity
            to make a component to save me some typing. The fun doesn&apos;t end
            there! Typically these components need to interact with my state, so
            getting them talking with redux is a great time. Sometimes the state
            just needs to be held locally, so integrating with state hooks makes
            that super simple to accomplish.
            <div className="new-line" />
            <div className="tab" />
            All the facets to React have been rewarding to learn, and I have
            enjoyed holding discussions with coworkers about best practices.
            React quickly became an important development tool that I am going
            to practice to keep sharp.
          </>
        ),
      },
    ],
  },
  CSS: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I used to be terrified of CSS. There are so
            many ways to make a certain style work. Which one to choose??{' '}
            <Emoji symbol="🤯" label="mindblown" /> That actually later became
            the fun in it! I love having an idea of how a page should look or
            act, and spending some time trying to figure out what css patterns I
            should use. While it can get complicated at times, finding a silver
            bullet that cleanly transforms a dingy page into a slick one is
            always a reward.
            <div className="new-line" />
            <div className="tab" />
            This entire site was styled with custom CSS. Getting the
            &quot;code&quot; to appear out of the background still blows my mind
            how simple it was to accomplish. I had never seen that done before,
            and it intrigues me with what else can be accomplished with simple
            class changes and transitions. I find that to be the beauty in CSS.
            Every moment I had tweaking it on this site felt like I was honing
            in closer and closer on my vision of this site.
          </>
        ),
      },
    ],
  },
  HTML: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I can&apos;t get too far in Web Development
            without using HTML, can I?
            <div className="new-line" />
            <div className="tab" />I really enjoy tinkering with HTML structures
            to find the best hierarchy to play nicely with{' '}
            <WordLink {...skillObjects.CSS} punc="." /> I&apos;ll start out with
            this seemingly great structure, then start adding my CSS into it...
            Then I&apos;m finding out that I need this div to be there, and oh
            no this other div definitely needs to be in a container div. The
            whole process is a puzzle, and unlike a jigsaw puzzle, I&apos;m
            happily satisfied with the use of my time by the end of it.
          </>
        ),
      },
    ],
  },
};
