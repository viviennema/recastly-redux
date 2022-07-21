import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

const storeInitialState = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};
const store = createStore(rootReducer, storeInitialState, applyMiddleware(thunk));

export default store;
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
