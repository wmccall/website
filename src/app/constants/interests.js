const INTERESTS_WORDS = {
  Ceramics: 'Art',
  Photography: 'Art',
  Illustrator: 'Art',
  Photoshop: 'Art',
  Music: 'Entertainment',
  Movies: 'Entertainment',
  'Video Games': 'Entertainment',
  'Mechanical Keyboards': 'Technology',
};

const interests = Object.keys(INTERESTS_WORDS).map(word => ({
  type: 'interest',
  word,
  tag: INTERESTS_WORDS[word],
}));

export const interestObjects = interests.reduce((obj, item) => {
  // eslint-disable-next-line no-param-reassign
  obj[item.word] = item;
  return obj;
}, {});

export default interests;
