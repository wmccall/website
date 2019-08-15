const SKILL_CATEGORIES_AND_EXAMPLES = [
  { word: 'Languages', examples: ['Java', 'Python', 'C#'] },
  { word: 'Web Development', examples: ['React', 'CSS', 'C#'] },
  {
    word: 'Infrastructure',
    examples: ['AWS', 'Terraform', 'Serverless', 'Docker'],
  },
  { word: 'Version-Control', examples: ['Git'] },
];

const skills = SKILL_CATEGORIES_AND_EXAMPLES.map(skillObject => ({
  type: 'skill',
  word: skillObject.word,
  examples: skillObject.examples,
}));

export default skills;
