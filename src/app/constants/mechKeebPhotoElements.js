import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  {
    title: 'Tux -> Win9009',
    photoElements: [
      {
        src: 'https://imgur.com/CmLVYjV.jpg',
        caption: 'New Retro Keycaps',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/ncENvv5.jpg',
        caption: 'Replaced ESC and Delete with some DIY keycaps',
        tw: 3990,
        th: 1772,
        tsize: 'm',
      },
    ],
  },
  {
    title: 'DIY Keycaps',
    photoElements: [
      {
        src: 'https://imgur.com/ubIVI6t.jpg',
        caption: 'Created a Silicone Mold',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/3gp3zoY.jpg',
        caption: 'First Cast',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/mdGQFvb.jpg',
        caption: 'Oops, no Stem!',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/U6oyAgv.jpg',
        caption: 'Second attempt looking pretty good',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/ABmRcFu.jpg',
        caption: 'Profile View of V2',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/02PcjKF.jpg',
        caption: 'Red V3',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/kqCZgbn.jpg',
        caption: 'V2 and V3',
        tw: 3480,
        th: 4640,
      },
    ],
  },
  {
    title: 'Tux and Frost',
    photoElements: [
      {
        src: 'https://imgur.com/Bmd2IWP.jpg',
        caption: 'Starting the Build',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/0QhapEh.jpg',
        caption: 'Placing the Clear Switches',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/WJE6VF2.jpg',
        caption: 'Placing the Brown Switches',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/08NrPhn.jpg',
        caption: 'Soldering',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/UEY3uKg.jpg',
        caption: 'Finshed Keyboards',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/reBKTrr.jpg',
        caption: 'Tux',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/ByFumyi.jpg',
        caption: 'Frost',
        tw: 4640,
        th: 3480,
      },
    ],
  },
  {
    title: 'Mint',
    photoElements: [
      {
        src: 'https://imgur.com/aYUlcvr.jpg',
        caption: 'Starting the Build',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/j3Uiz0D.jpg',
        caption: 'Preparing to Solder',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/0H9VL38.jpg',
        caption: 'Soldering the LEDs',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/fA85p5I.jpg',
        caption: 'Testing the LEDs',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/ayUXth3.jpg',
        caption: 'All Done',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/yoWGUIR.jpg',
        caption: 'Custom Coiled Cable',
        tw: 4032,
        th: 3024,
      },
      {
        src: 'https://imgur.com/PJtqI9n.jpg',
        caption: 'Left Macro',
        tw: 3024,
        th: 4032,
      },
      {
        src: 'https://imgur.com/O0j7vny.jpg',
        caption: 'Right Macro',
        tw: 3024,
        th: 4032,
      },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
