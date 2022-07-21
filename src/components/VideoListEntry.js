import React from 'react';
import PropTypes from 'prop-types';

var VideoListEntry = ({video, handleVideoListEntryTitleClick}) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div
        className="video-list-entry-title"
        onClick={() => handleVideoListEntryTitleClick(video)}
      >
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);

VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListEntry;

//store.dispatch({
//   type: "ADD_MESSAGE",
//   payload: { userName: "Lauren", text: "Where should we go out to eat?" }
// })
