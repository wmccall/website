import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoElement = props => {
  const {
    word,
    last,
    hoverCategory,
    permanentCategory,
    defaultType,
    setCurrentTag,
    setCurrentPage,
  } = props;

  const typeToClass = {
    skill: 'pseudo-string',
    interest: 'pseudo-method',
    achievement: 'pseudo-reserved',
  };

  const defaultClass = `pseudo-${defaultType}`;

  const isCategoryActive = () => permanentCategory === word.type;

  return (
    <button
      className={`${
        typeToClass[word.type] ? typeToClass[word.type] : defaultClass
      } ${
        hoverCategory === word.type || isCategoryActive() ? 'visible' : 'blur'
      } ${isCategoryActive() ? 'underline' : 'noline'}`}
      onClick={() =>
        isCategoryActive() &&
        setCurrentTag(word.word, word.type) &&
        setCurrentPage('tag')
      }
      type="button"
    >
      {word.word}
      {last && PseudoCodeUtils.semiColon}
    </button>
  );
};

PseudoElement.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string,
    type: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setCurrentTag: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  defaultType: PropTypes.string.isRequired,
  hoverCategory: PropTypes.string,
  permanentCategory: PropTypes.string,
  last: PropTypes.bool,
};

PseudoElement.defaultProps = {
  hoverCategory: null,
  permanentCategory: null,
  last: false,
};

export default PseudoElement;
