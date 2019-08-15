const ACHIEVEMENTS_CATEGORIES_AND_EXAMPLES = [
  {
    word: 'Academics',
    examples: [
      'RIT Presidential Scholarship',
      'DeansList: [2015,2016,2017,2018,2019]',
    ],
  },
];

const achievements = ACHIEVEMENTS_CATEGORIES_AND_EXAMPLES.map(wordObject => ({
  type: 'achievement',
  word: wordObject.word,
  examples: wordObject.examples,
}));

export default achievements;
