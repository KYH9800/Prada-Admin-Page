import { all, fork, delay, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';

// Reducer
import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../reducers/item';

// LOAD_ITEMS
function loadItemsAPI(data) {
  return axios.get(`/admin/items`);
}
function* loadItems(action) {
  try {
    const result = yield call(loadItemsAPI);
    yield put({
      type: GET_ITEMS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    put({
      type: GET_ITEMS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadItems() {
  yield takeLatest(GET_ITEMS_REQUEST, loadItems);
}

export default function* postSaga() {
  yield all([fork(watchLoadItems)]);
}
