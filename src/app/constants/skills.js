const SKILLS_WORDS = {
  Python: 'Language',
  JavaScript: 'Language',
  'C#': 'Language',
  Java: 'Language',
  AWS: 'Infrastructure',
  Terraform: 'Infrastructure',
  Serverless: 'Infrastructure',
  Docker: 'Infrastructure',
  Git: 'Version Control',
  GitHub: 'Version Control',
  React: 'Web Development',
  CSS: 'Web Development',
  HTML: 'Web Development',
};

const skills = Object.keys(SKILLS_WORDS).map(word => ({
  type: 'skill',
  word,
  tag: SKILLS_WORDS[word],
}));

export const skillObjects = skills.reduce((obj, item) => {
  // eslint-disable-next-line no-param-reassign
  obj[item.word] = item;
  return obj;
}, {});

export default skills;
