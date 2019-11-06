import pseudoCode from '../components/PseudoCode';

const generateFiller = codeCount => {
  if (codeCount % 13 === 0) {
    return pseudoCode.pseudoReturnMethod();
  }
  if (codeCount % 15 === 0) {
    return pseudoCode.pseudoReturnString();
  }
  if (codeCount % 17 === 0) {
    return pseudoCode.pseudoStringConstDefinition();
  }
  return undefined;
};

// Distribute the words into the background code with
// filler code to take up more space
const backgroundCode = words => {
  const allCode = [];
  let wordCount = 0;
  for (let x = 0; x < 35; x += 1) {
    const tempFiller = generateFiller(x);
    if (tempFiller) {
      allCode.push(tempFiller);
    }
  }
  for (let codeCount = 0; wordCount < words.length; codeCount += 1) {
    if (codeCount % 19 === 0) {
      allCode.push(
        pseudoCode.pseudoImport(words[wordCount], {
          type: 'none',
          word: 'react',
        }),
      );
      wordCount += 1;
    }
    if (codeCount % 18 === 0) {
      allCode.push(pseudoCode.pseudoMethodCall(words[wordCount]));
      wordCount += 1;
    }
    const tempFiller = generateFiller(codeCount);
    if (tempFiller) {
      allCode.push(tempFiller);
    }
  }
  for (let x = 0; x < 35; x += 1) {
    const tempFiller = generateFiller(x);
    if (tempFiller) {
      allCode.push(tempFiller);
    }
  }
  return allCode;
};

export default backgroundCode;
