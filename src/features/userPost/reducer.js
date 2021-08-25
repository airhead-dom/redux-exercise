import {
  START_LOAD_POSTS,
  DONE_LOAD_POSTS,
  START_LOAD_DETAIL_POST,
  DONE_LOAD_DETAIL_POST,
} from './actions';

const initialPostsState = {
  isLoading: false,
  items: [],
  detail: undefined,
};

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case START_LOAD_POSTS:
    case START_LOAD_DETAIL_POST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DONE_LOAD_POSTS:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.payload,
      });
    case DONE_LOAD_DETAIL_POST:
      return Object.assign({}, state, {
        isLoading: false,
        detail: action.payload,
      });
    default:
      return state;
  }
};

export default postsReducer;
