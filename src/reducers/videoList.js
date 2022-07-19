import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return {
      currentVideo: action.videos
    };
  default:
    return state;
  }
};


export default videoListReducer;
