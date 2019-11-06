import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  {
    title: 'BKLYN CLAY Work [2019]',
    photoElements: [
      {
        src: 'https://imgur.com/bYdxsHx.jpg',
        caption: 'Starry Night Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/JBo3WN0.jpg',
        caption: 'Caramel and Aqua Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/oRPHDTj.jpg',
        caption: 'Blue and White Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/uPB6EiS.jpg',
        caption: 'Blue and White Plate',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/zGTFZO9.jpg',
        caption: 'Blue and White Bowl',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/TBc5n1b.jpg',
        caption: 'White Carved Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/2pm1E3m.jpg',
        caption: 'Teal Carved Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/XAvs7Ji.jpg',
        caption: 'Carved Speckled Bowl',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/0Ncv1ZT.jpg',
        caption: 'Fish Bone Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/cjfWmxh.jpg',
        caption: 'Black and White Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/IepZqtu.jpg',
        caption: 'Black and White Mugs',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/AOTrneV.jpg',
        caption: 'Tan and Moss Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/mdY6hLf.jpg',
        caption: 'Turquoise and Brown Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/E4SrFqO.jpg',
        caption: 'Turquoise and Black Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/Ec5M2y7.jpg',
        caption: 'Turquoise and Black Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/nZAuT9O.jpg',
        caption: 'Turquoise and Pastel Blue Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/cjzhH9e.jpg',
        caption: 'Zebra Carved Bowl',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/5kliG5j.jpg',
        caption: 'Espresso Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/XIqa49r.jpg',
        caption: 'Red and White Carved Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/vdCKeLh.jpg',
        caption: 'Red and Black Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/htrRZ0f.jpg',
        caption: 'Speckled Pot',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/EJuoBds.jpg',
        caption: 'Cigar Ash Tray',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/0VrzL4V.jpg',
        caption: 'Turquoise and Brown Tumbler',
        tw: 3480,
        th: 4640,
      },
    ],
  },
  {
    title: 'RIT Course Work [2018]',
    photoElements: [
      {
        src: 'https://imgur.com/omVBdW3.jpg',
        caption: 'Blue Dip Mugs',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/N3RhFBV.jpg',
        caption: 'Blue Dip Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/KxAFnn9.jpg',
        caption: 'Togepi Tumbler',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/js0Mx14.jpg',
        caption: 'Ceramic Lamp',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/mYn53NX.jpg',
        caption: 'Color Band Mugs',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/dmMAOuw.jpg',
        caption: 'Blue Dip Pourers',
        tw: 4640,
        th: 3480,
      },
      {
        src: 'https://imgur.com/sHIMDiZ.jpg',
        caption: 'Unglazed Mugs',
        tw: 4640,
        th: 3480,
      },
    ],
  },
  {
    title: 'Community Arts Center Work [2014]',
    photoElements: [
      {
        src: 'https://imgur.com/JmOWbow.jpg',
        caption: 'Eye Bowl',
        tw: 3480,
        th: 4640,
      },

      {
        src: 'https://imgur.com/LAGfyVD.jpg',
        caption: 'Green Mug',
        tw: 3480,
        th: 4640,
      },
      {
        src: 'https://imgur.com/WOZCwMH.jpg',
        caption: 'Tall Dish',
        tw: 423,
        th: 611,
      },

      {
        src: 'https://imgur.com/vEMhfqL.jpg',
        caption: "Blue Hare's Fur Pieces",
        tw: 640,
        th: 372,
      },

      {
        src: 'https://imgur.com/hZsgeXF.jpg',
        caption: 'Colorful Dishes',
        tw: 640,
        th: 640,
      },
      {
        src: 'https://imgur.com/LT8y2xo.jpg',
        caption: 'Colorful Dishes',
        tw: 634,
        th: 357,
      },
      {
        src: 'https://imgur.com/IVonQEY.jpg',
        caption: 'Striped Plate',
        tw: 640,
        th: 640,
      },
      {
        src: 'https://imgur.com/0HeiCix.jpg',
        caption: 'Beginning Pieces',
        tw: 3000,
        th: 1377,
      },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
