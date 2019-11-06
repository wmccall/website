import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import backgroundCode from '../../constants/backgroundCode';

import ProfilePhoto from '../../resources/WillKeeb-min.jpg';

const ACTIONS_BUTTONS_TYPES = ['skill', 'project', 'interest'];

const Home = props => {
  const {
    setHoverCategory,
    setPermanentCategory,
    hoverCategory,
    permanentCategory,
    allWords,
  } = props;

  const hideProfile = hoverCategory || permanentCategory;

  const [loaded, setLoaded] = useState(false);

  const profile = () => (
    <div
      className={`profile-container ${
        hideProfile || !loaded ? 'opaque' : 'show'
      }`}
    >
      <img
        className="profile-picture"
        src={ProfilePhoto}
        alt="Will's profile"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );

  const actionButtons = () => (
    <div className="action-buttons">
      {ACTIONS_BUTTONS_TYPES.map(actType => (
        <button
          className={`${actType}s-button ${
            permanentCategory === actType ? 'active' : ''
          }`}
          key={`${actType}s-button`}
          type="button"
          onMouseEnter={() => setHoverCategory(actType)}
          onMouseLeave={() => setHoverCategory(null)}
          onClick={() =>
            setPermanentCategory(permanentCategory === actType ? null : actType)
          }
        >
          <span className="button-will">Will</span>
          <span className="button-dot">.</span>
          <span className="button-type">{`${actType}s`}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className={`home ${!loaded ? 'opaque' : 'show'}`}>
      <div className="code">
        {
          // eslint-disable-next-line jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events
          <div
            className="code-container"
            onClick={() => setPermanentCategory(null)}
            role="button"
          >
            {backgroundCode(allWords)}
          </div>
        }
      </div>
      {profile()}
      {actionButtons()}
    </div>
  );
};

Home.propTypes = {
  setHoverCategory: PropTypes.func.isRequired,
  hoverCategory: PropTypes.string,
  setPermanentCategory: PropTypes.func.isRequired,
  permanentCategory: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Home.defaultProps = {
  hoverCategory: null,
  permanentCategory: null,
};

export default Home;
