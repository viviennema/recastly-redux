import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  switch (action.type) {
  case 'CHANGE_VIDEO':
    console.log(action.video);
    return action.video
    ;
  default:
    return state;
  }
};

export default currentVideoReducer;
