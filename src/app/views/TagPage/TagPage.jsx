import React from 'react';
import { PropTypes } from 'prop-types';

const containsTag = (word, currentTag, currentTagType) =>
  word.type === currentTagType && word.word === currentTag;

const TagPage = props => {
  const {
    setCurrentTag,
    currentTag,
    currentTagType,
    allWords,
    setCurrentPage,
  } = props;

  const backArrow = '<=';

  const wordsWithCurrentTag = () => {
    return allWords
      .filter(word => containsTag(word, currentTag, currentTagType))
      .map(word => word.examples.join(', '));
  };

  const backButton = () => (
    <button
      className="clear-tag"
      type="button"
      onClick={() => setCurrentTag(null, null) && setCurrentPage('home')}
    >
      {backArrow}
    </button>
  );

  return (
    <div className="tag-page">
      <div className="top-bar">
        {backButton()}
        <div className={`tag-title ${currentTagType}`}>{currentTag}</div>
      </div>
      <div className="page-inner">
        <div className="words">{wordsWithCurrentTag()}</div>
      </div>
    </div>
  );
};

TagPage.propTypes = {
  setCurrentTag: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentTag: PropTypes.arrayOf(PropTypes.string),
  currentTagType: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

TagPage.defaultProps = {
  currentTag: null,
  currentTagType: null,
};

export default TagPage;
