import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* watcherSaga() {
  yield takeEvery(`GET_IMAGE`, getImageSaga);
  yield takeEvery(`POST_IMAGE`, postImageSaga);
}

// GET images
function* getImageSaga(action){
  try{
      const getResponse = yield axios.get(`/image`, action.payload);
      yield put({type: `SET_IMAGE`, payload: getResponse.data});
  }
  catch(error){
      console.log('error in GET image', error);
  }
}

// POST image
function* postImageSaga(action){
  try{
      yield axios.post(`/image`, {data: action.payload});
      yield put({type: `GET_IMAGE`});
  }
  catch(error){
      console.log('error in POST image', error);
  }
}

const imageReducer = (state=[], action) => {
  if(action.type === `SET_IMAGE`){
    return action.payload;
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    imageReducer
  }),
applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
