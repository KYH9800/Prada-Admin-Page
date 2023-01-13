import produce from '../util/produce';

export const initialState = {
  mainItems: [], // 상품 Data
  singleItem: null, // 게시글 하나만 불러올때
  // 상품 추가
  addItemLoading: false,
  addItemDone: false,
  addItemError: null,

  // 상품 불러오기
  getItemLoading: false,
  getItemDone: false,
  getItemError: null,

  // 상품 수정
  updateItemLoading: false,
  updateItemDone: false,
  updateItemError: null,

  // 상품 삭제
  deleteItemLoading: false,
  deleteItemDone: false,
  deleteItemError: null,
};

// 상품 추가
export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

// 전체 상품 조회
export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

// 상품 상세조회, 하나만 불러올때
export const LOAD_ITEM_REQUEST = 'LOAD_ITEM_REQUEST';
export const LOAD_ITEM_SUCCESS = 'LOAD_ITEM_SUCCESS';
export const LOAD_ITEM_FAILURE = 'LOAD_ITEM_FAILURE';

// 상품 수정
export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

// 상품 삭제
export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 상품 추가
      case ADD_ITEM_REQUEST:
        draft.addItemLoading = true;
        draft.addItemDone = false;
        draft.addItemError = null;
        break;
      case ADD_ITEM_SUCCESS:
        // draft.mainItems.unshift(action.data);
        draft.addItemLoading = false;
        draft.addItemDone = true;
        break;
      case ADD_ITEM_FAILURE:
        draft.addItemLoading = false;
        draft.addItemError = action.error;
        break;

      // 전체 상품 조회
      case GET_ITEMS_REQUEST:
        draft.getItemLoading = true;
        draft.getItemDone = false;
        draft.getItemError = null;
        break;
      case GET_ITEMS_SUCCESS:
        draft.mainItems = action.data; // draft.mainItems.concat(action.data);
        draft.getItemLoading = false;
        draft.getItemDone = true;
        break;
      case GET_ITEMS_FAILURE:
        draft.getItemLoading = false;
        draft.getItemError = action.error;
        break;

      // 상품 상세조회
      case LOAD_ITEM_REQUEST:
        draft.loadItemLoading = true;
        draft.loadItemDone = false;
        draft.loadItemError = null;
        break;
      case LOAD_ITEM_SUCCESS:
        // draft.singleItem = action.data;
        draft.loadItemLoading = false;
        draft.loadItemDone = true;
        break;
      case LOAD_ITEM_FAILURE:
        draft.loadItemLoading = false;
        draft.loadItemError = action.error;
        break;

      // 상품 수정
      case UPDATE_ITEM_REQUEST:
        draft.updateItemLoading = true;
        draft.updateItemDone = false;
        draft.updateItemError = null;
        break;
      case UPDATE_ITEM_SUCCESS:
        // draft.mainItems.find((v) => v.id === action.data.PostId).content = action.data.content;
        draft.updateItemLoading = false;
        draft.updateItemDone = true;
        break;
      case UPDATE_ITEM_FAILURE:
        draft.updateItemLoading = false;
        draft.updateItemError = action.error;
        break;

      // 상품 삭제
      case DELETE_ITEM_REQUEST:
        draft.deleteItemLoading = true;
        draft.deleteItemDone = false;
        draft.deleteItemError = null;
        break;
      case DELETE_ITEM_SUCCESS:
        // draft.mainItems = draft.mainItems.filter((v) => v.id !== action.data.PostId);
        draft.deleteItemLoading = false;
        draft.deleteItemDone = true;
        break;
      case DELETE_ITEM_FAILURE:
        draft.deleteItemLoading = false;
        draft.deleteItemError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
