import { all, fork } from 'redux-saga/effects'; // saga의 effects
import axios from 'axios';
// import components
import userSaga from './user';
import itemSaga from './item';
import { backURL } from '../config/config';

axios.defaults.baseURL = backURL; // 'http://localhost:3000';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga), // call
    fork(itemSaga), // call
  ]);
}
