import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  {
    title: null,
    photoElements: [
      {
        src: 'https://imgur.com/G09ant4.jpg',
        caption: 'Poly Headshot',
        tw: 1800,
        th: 1600,
      },
      {
        src: 'https://imgur.com/n5hjjrP.jpg',
        caption: 'California Hills',
        tw: 1800,
        th: 2025,
      },

      {
        src: 'https://imgur.com/knPIL8g.jpg',
        caption: 'Old Logo',
        tw: 1500,
        th: 1500,
      },
      {
        src: 'https://imgur.com/jYyolYF.jpg',
        caption: 'Vaporwave Connor',
        tw: 1536,
        th: 960,
      },
      {
        src: 'https://imgur.com/z3P6Mft.jpg',
        caption: 'Colin VHS',
        tw: 2880,
        th: 2048,
      },

      {
        src: 'https://imgur.com/OTiixhs.jpg',
        caption: 'Crystal Ripple',
        tw: 1920,
        th: 1080,
      },
      {
        src: 'https://imgur.com/YHjQFeR.jpg',
        caption: 'Snow Transition',
        tw: 3600,
        th: 2425,
      },
      {
        src: 'https://imgur.com/LUErw0S.jpg',
        caption: 'Space',
        tw: 4800,
        th: 2700,
      },
      {
        src: 'https://imgur.com/gdcHeBl.jpg',
        caption: "Haven't Peaked",
        tw: 2560,
        th: 1440,
      },
      {
        src: 'https://imgur.com/0IkV8wM.jpg',
        caption: 'Sunset',
        tw: 2100,
        th: 1500,
      },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
