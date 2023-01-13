import { all, fork, delay, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';

// Reducer
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from '../reducers/user';

// 로그인
function loginAPI(data) {
  return axios.post(`/user/login`, data);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

// 회원가입
function signupAPI(data) {
  return axios.post(`/user/signup`, data);
}

function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

// 내 정보 불러오기
function loadMyInfoAPI() {
  return axios.get(`/user`);
}

function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);
    console.log('loadMyInfo: ', result);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

// 내 정보 불러오기
function logoutAPI() {
  return axios.post(`/user/logout`);
}

function* logout(action) {
  try {
    const result = yield call(logoutAPI, action.data);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data, // 성공 결과
    });
  } catch (err) {
    console.error(err);
    put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

function* watchlogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchloadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

export default function* itemSaga() {
  yield all([fork(watchSignup), fork(watchloadMyInfo), fork(watchLogin), fork(watchlogout)]);
}
