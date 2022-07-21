import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//var VideoPlayerContainer = () => {};
const VideoPlayerContainer = (props) => {
  return <VideoPlayer video = {props.currentVideo} />;
};

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};
// const mapDispatchToProps = function(dispatch) {
//   return {

//     handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
//   };
// };

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps)(VideoPlayerContainer);
