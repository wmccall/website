import React from 'react';
import { PropTypes } from 'prop-types';

import { skillPageData } from '../../constants/skillsDefinitions';
import { interestPageData } from '../../constants/interestsDefinitions';
import { projectPageData } from '../../constants/projectsDefinitions';

const pageData = {
  skill: skillPageData,
  interest: interestPageData,
  project: projectPageData,
};

const separateMainAndSubTopics = topicDiscussions => ({
  mainTopic: topicDiscussions[0],
  subTopics: topicDiscussions.slice(1),
});

const generateMainTopicTitle = (word, topicTitle, sourceLink) => (
  <>
    <div className="italic no-pad">{word}</div>
    {topicTitle && (
      <>
        <div className="neutral">:</div>
        <div className="neutral italic small">{topicTitle}</div>
      </>
    )}
    {sourceLink && (
      <>
        <div className="neutral small">-</div>
        <div className="neutral no-pad small">[</div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sourceLink}
          className="small"
        >
          View Source
        </a>
        <div className="neutral no-pad small">]</div>
      </>
    )}
  </>
);

const generateSubTopicTitle = (topicTitle, sourceLink) => (
  <>
    <div className="italic no-pad">{topicTitle}</div>
    {sourceLink && (
      <>
        <div className="left-pad neutral small">-</div>
        <div className="neutral no-pad small">[</div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sourceLink}
          className="small"
        >
          View Source
        </a>
        <div className="neutral no-pad small">]</div>
      </>
    )}
  </>
);

const generateSubTopics = (type, subTopics) =>
  subTopics.map(({ title, description, sourceLink }, index) => (
    <div className="sub-topic" key={`st_${index.toString()}_${title}`}>
      <div className={`sub-header ${type}`}>
        {generateSubTopicTitle(title, sourceLink)}
      </div>
      {description && <div className="description">{description}</div>}
    </div>
  ));

const Discussion = ({ type, word }) => {
  const { mainTopic, subTopics } = separateMainAndSubTopics(
    pageData[type][word].discussion,
  );

  return (
    <div className="Discussion">
      <div className="main-topic">
        <div className={`header ${type}`}>
          {generateMainTopicTitle(word, mainTopic.title, mainTopic.sourceLink)}
        </div>
        {mainTopic.description && (
          <div className="description">{mainTopic.description}</div>
        )}
      </div>
      <div className="sub-topics">{generateSubTopics(type, subTopics)}</div>
    </div>
  );
};

Discussion.propTypes = {
  type: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default Discussion;
