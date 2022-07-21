import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


const VideoListContainer = (props) => {
  console.log(state.videos);
  console.log(props.videos);
  return <VideoList handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick} videos = {props.videos} />;
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};
const mapDispatchToProps = function(dispatch) {
  return {

    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
  };
};
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);

// function mapStateToProps(state, ownProps) {
//   return {attendanceRecords: state.attendanceRecords}
// }

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(attendanceRecordActions, dispatch)
//   }
