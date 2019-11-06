import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  {
    title: null,
    photoElements: [
      {
        src: 'https://imgur.com/F83ugMV.png',
        caption: 'Personal Logo',
        tw: 3841,
        th: 3502,
      },
      {
        src: 'https://imgur.com/jWgnrTe.png',
        caption: 'Personal Logo: RGB',
        tw: 3841,
        th: 3501,
      },
      {
        src: 'https://imgur.com/xwsRs2I.png',
        caption: 'Personal Logo: Thick',
        tw: 3841,
        th: 3501,
      },
      {
        src: 'https://imgur.com/ziYmW2x.png',
        caption: 'CODE Sticker',
        tw: 298,
        th: 327,
      },
      {
        src: 'https://imgur.com/I9oUMdY.png',
        caption: 'HopHead Sticker',
        tw: 3025,
        th: 3024,
      },
      {
        src: 'https://imgur.com/zhrmzaL.png',
        caption: 'SWAT Logo Sticker',
        tw: 1800,
        th: 1672,
      },
      {
        src: 'https://imgur.com/PCNAF3u.png',
        caption: 'SWAT Profile Attempt',
        tw: 1800,
        th: 1817,
      },
      {
        src: 'https://imgur.com/KxbbQn7.png',
        caption: 'Wallpaper',
        tw: 3841,
        th: 2161,
      },
      {
        src: 'https://imgur.com/YiC2PAa.png',
        caption: 'Shaqulator',
        tw: 5157,
        th: 8263,
      },
      {
        src: 'https://imgur.com/XD3NXwS.png',
        caption: "Q'd Up Logo",
        tw: 600,
        th: 602,
      },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
