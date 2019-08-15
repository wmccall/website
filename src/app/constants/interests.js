const INTERESTS_CATEGORIES_AND_EXAMPLES = [
  {
    word: 'Art',
    examples: ['Ceramics', 'Photography', 'Illustrator', 'Photoshop'],
  },
  { word: 'Entertainment', examples: ['Music', 'Movies', 'Video Games'] },
];

const interests = INTERESTS_CATEGORIES_AND_EXAMPLES.map(wordObject => ({
  type: 'interest',
  word: wordObject.word,
  examples: wordObject.examples,
}));

export default interests;
