import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('loggerMiddleware(redux-thunk): ', action);
    return next(action);
  };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(); // redux-saga
  // const middlewares = [sagaMiddleware, loggerMiddleware]; // 추후 saga || thunk 를 넣기 위한 배열 생성
  const enhancer = // 배포용일떄 ? devTool 연결 X : devTool 연결 O
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(sagaMiddleware))
      : composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware));
  const store = createStore(reducer, enhancer); // state와 reducer를 포함하는게 store
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
