import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {


  //TODO:  Write an asynchronous action to handle a video search!
  return function(dispatch) {
    // dispatch(searchYouTube(YOUTUBE_API_KEY, q = null));
    setTimeout(function() {
      searchYouTube({YOUTUBE_API_KEY, q}, function(videos) {
        dispatch(changeVideoList(videos));
        dispatch(changeVideo(videos[0]));
      });
    }, 1000);

  };
};

export default handleVideoSearch;
