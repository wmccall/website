import React from 'react';
import { PropTypes } from 'prop-types';
import Gallery from 'react-grid-gallery';

import { skillPageData } from '../../constants/skillsDefinitions';
import { interestPageData } from '../../constants/interestsDefinitions';
import { projectPageData } from '../../constants/projectsDefinitions';

const discussions = {
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
  subTopics.map(({ title, description, photoElements, sourceLink }, index) => (
    <div className="sub-topic" key={`st_${index.toString()}_${title}`}>
      <div className={`sub-header ${type}`}>
        {generateSubTopicTitle(title, sourceLink)}
      </div>
      {description && <div className="description">{description}</div>}
      {photoElements && (
        <div className="photos">
          <Gallery images={photoElements} enableImageSelection={false} />
        </div>
      )}
    </div>
  ));

const Discussion = ({ type, word }) => {
  const { mainTopic, subTopics } = separateMainAndSubTopics(
    discussions[type][word].discussion,
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
        {mainTopic.photoElements && (
          <div className="photos">
            <Gallery
              images={mainTopic.photoElements}
              enableImageSelection={false}
            />
          </div>
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
