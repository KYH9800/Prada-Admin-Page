import { combineReducers } from 'redux'; // combineReducers은 reducer 함수를 합쳐주는 역할
import { HYDRATE } from 'next-redux-wrapper'; // SSR(Server Side Rendering)을 위함
// spliting reducer
import user from './user';
import item from './item';

// async action creator(비동기) / redux-saga

// (이전상태, 액션) >> 다음 상태
// HYDRATE를 위해 index reducer를 추가 (SSR을 위해 추가함)
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({
        user,
        item,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
