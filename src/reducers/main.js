import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = combineReducers({
  currentVideo: currentVideoReducer,
  videoList: videoListReducer
});



//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;

// const rootReducer = combineReducers({
//   messages: messagesReducer,
//   chatList: chatRoomReducer,
//   users: usersReducer
//   //add the rest of the reducers
// });
