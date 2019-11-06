import React from 'react';
import { PropTypes } from 'prop-types';

const wordAndTagSame = (word, currentWord, type, currentType) =>
  word === currentWord && type === currentType;

const WordLink = ({
  punc,
  word,
  tag,
  type,
  currentWord,
  currentType,
  goForwardPage,
}) => {
  const shouldLink = !wordAndTagSame(word, currentWord, type, currentType);

  const linkClasses = `${type} link`;

  const clickHandler = () => {
    if (shouldLink) {
      goForwardPage('tag', tag, type, word);
    }
  };

  return (
    <button type="button" className="WordLink" onClick={clickHandler}>
      <span
        className={`word-link-word ${shouldLink ? linkClasses : 'no-link'}`}
      >
        {word}
      </span>
      <span className="punctuation">{punc}</span>
    </button>
  );
};

WordLink.propTypes = {
  punc: PropTypes.string,
  word: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currentWord: PropTypes.string.isRequired,
  currentType: PropTypes.string.isRequired,
  goForwardPage: PropTypes.func.isRequired,
};

WordLink.defaultProps = {
  punc: '',
};

export default WordLink;
