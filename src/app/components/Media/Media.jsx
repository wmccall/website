import React from 'react';
import { PropTypes } from 'prop-types';
import Gallery from 'react-grid-gallery';
import SpotifyPlayer from 'react-spotify-player';

import { skillPageData } from '../../constants/skillsDefinitions';
import { interestPageData } from '../../constants/interestsDefinitions';
import { projectPageData } from '../../constants/projectsDefinitions';

const pageData = {
  skill: skillPageData,
  interest: interestPageData,
  project: projectPageData,
};

const generateVideo = videoData => {
  const { title, src } = videoData;
  return (
    <div className="video">
      <div className="title">{title}</div>
      <iframe
        title={`${title} video`}
        src={src}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
const generatePhotos = albumData => {
  const { title, photoElements } = albumData;
  return (
    <div className="album">
      {title && <div className="title">{title}</div>}
      <div className="album-photos">
        <Gallery images={photoElements} enableImageSelection={false} />
      </div>
    </div>
  );
};
const generatePlaylists = playlistGroup => {
  const { groupTitle, playlists } = playlistGroup;
  return (
    <div className="playlist-group">
      {groupTitle && <div className="title">{groupTitle}</div>}
      {playlists.map(({ playlistURI }) => (
        <SpotifyPlayer
          uri={playlistURI}
          size="compact"
          view="coverart"
          theme="black"
        />
      ))}
    </div>
  );
};

const Media = ({ type, word }) => {
  const currentPageMedia = pageData[type][word].media;

  return currentPageMedia ? (
    <div className={`Media ${type}`}>
      {currentPageMedia.videos && (
        <div className="videos">
          <div>Videos</div>
          {currentPageMedia.videos.map(videoData => generateVideo(videoData))}
        </div>
      )}
      {currentPageMedia.albums && (
        <div className="photos">
          <div>Photos</div>
          {currentPageMedia.albums.map(albumData => generatePhotos(albumData))}
        </div>
      )}
      {currentPageMedia.playlistGroups && (
        <div className="playlists">
          <div>Playlists</div>
          {currentPageMedia.playlistGroups.map(playlistGroup =>
            generatePlaylists(playlistGroup),
          )}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

Media.propTypes = {
  type: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default Media;
