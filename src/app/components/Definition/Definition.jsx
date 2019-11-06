import React from 'react';
import { PropTypes } from 'prop-types';

import { skillTagDefinitions } from '../../constants/skillsDefinitions';
import { interestTagDefinitions } from '../../constants/interestsDefinitions';
import { projectTagDefinitions } from '../../constants/projectsDefinitions';

const definitions = {
  skill: skillTagDefinitions,
  interest: interestTagDefinitions,
  project: projectTagDefinitions,
};

const Definition = ({ type, word }) => {
  const { description } = definitions[type][word];

  return (
    <div className="Definition">
      <div className="word-and-speech">
        <div className={`word ${type}`}>{word}</div>
      </div>
      <div className="description">
        <div className="tab" />
        {description}
      </div>
    </div>
  );
};

Definition.propTypes = {
  type: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default Definition;
