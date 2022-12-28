import { all, fork, delay, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';

// import reducer
import {} from ''; // from '../reducers/item';

//* LOAD_POST
function loadPostAPI(data) {
  return axios.get(`/post/${data}`);
}
function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

export default function* postSaga() {
  yield all([fork(watchLoadPost)]);
}
