import React from 'react';
import { PropTypes } from 'prop-types';

import Definition from '../../components/Definition';
import Discussion from '../../components/Discussion';
import Media from '../../components/Media';

const containsTag = (word, currentTag, currentTagType) => {
  if (word.type === currentTagType) {
    return word.tag === currentTag;
  }
  return false;
};

const TagPage = props => {
  const {
    currentWord,
    currentTag,
    currentTagType,
    previousTagType,
    allWords,
    goForwardPage,
    goBackPage,
    goHome,
    showHomeButton,
  } = props;

  const backArrow = '<=';
  const homeArrow = '<<=';
  const leftCurlyBrace = '{';
  const rightCurlyBrace = '}';
  const leftBracket = '[';
  const rightBracket = ']';
  const singleQuote = "'";
  const doubleQuote = '"';
  const comma = ',';

  const wordsWithCurrentTag = () => {
    const filteredWords = allWords.filter(word =>
      containsTag(word, currentTag, currentTagType),
    );
    return filteredWords.map((word, index) => (
      <>
        <button
          className={`word ${currentTagType} ${
            word.word === currentWord ? 'selected' : ''
          }`}
          type="button"
          onClick={() =>
            word.word !== currentWord &&
            goForwardPage('tag', currentTag, currentTagType, word.word)
          }
        >
          {word.word}
        </button>
        {index !== filteredWords.length - 1 && (
          <div className="later-comma">{comma}</div>
        )}
      </>
    ));
  };

  const backButton = () => (
    <button
      className={`back-button ${previousTagType || 'home'}`}
      type="button"
      onClick={() => goBackPage()}
    >
      <span>{backArrow}</span>
    </button>
  );

  const homeButton = () => (
    <button
      className={`back-button home-button home ${
        showHomeButton ? 'visible' : 'hidden'
      }`}
      type="button"
      onClick={() => goHome()}
    >
      <span>{homeArrow}</span>
    </button>
  );

  const showExtraWords = () => wordsWithCurrentTag().length > 0;

  const containsSingleQuote = word => word.search("'") > 0;

  const doubleQuoteTag = containsSingleQuote(currentTag);

  const doubleQuoteWord = containsSingleQuote(currentWord);

  const navigation = (
    <>
      <div className="bracket">{leftBracket}</div>
      {showExtraWords() && <div className="words">{wordsWithCurrentTag()}</div>}
      <div className="bracket">{rightBracket}</div>
    </>
  );

  const pageName = (
    <>
      <div className="inline">
        <span className="neutral">{leftCurlyBrace}</span>

        <span className="constant">{currentTagType.toUpperCase()}_CLASS</span>
        <span className="neutral">: </span>
        {doubleQuoteTag ? doubleQuote : singleQuote}
        {currentTag}
        {doubleQuoteTag ? doubleQuote : singleQuote}

        <span className="neutral">{comma} </span>
      </div>
      <div className="inline">
        <span className="constant">{currentTagType.toUpperCase()}_NAME</span>
        <span className="neutral">: </span>
        {doubleQuoteWord ? doubleQuote : singleQuote}
        {currentWord}
        {doubleQuoteWord ? doubleQuote : singleQuote}

        <span className="neutral">{rightCurlyBrace}</span>
      </div>
    </>
  );

  const topBar = (
    <>
      <div className="level-one ">
        {backButton()}
        <div className="tag-title ">{navigation}</div>
      </div>
      <div className="level-two">
        {homeButton()}
        <div className="tag">{pageName}</div>
      </div>
    </>
  );

  return (
    <div className="tag-page">
      <div className={`top-bar ${currentTagType}`}>{topBar}</div>
      <div className="page-container">
        <div className="page-inner">
          <div className="topic-focus">
            <Definition />
            <Discussion />
          </div>
          <Media />
        </div>
        <div className="padding-vertical" />
      </div>
    </div>
  );
};

TagPage.propTypes = {
  goForwardPage: PropTypes.func.isRequired,
  goBackPage: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired,
  currentTag: PropTypes.string,
  currentTagType: PropTypes.string,
  previousTagType: PropTypes.string,
  currentWord: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showHomeButton: PropTypes.bool.isRequired,
};

TagPage.defaultProps = {
  currentWord: null,
  currentTag: null,
  currentTagType: null,
  previousTagType: null,
};

export default TagPage;
