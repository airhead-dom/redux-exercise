import { START_LOAD_PHOTOS, DONE_LOAD_PHOTOS } from './actions';

const initialPhotosState = {
  isLoading: false,
  items: [],
};

const photosReducer = (state = initialPhotosState, action) => {
  switch (action.type) {
    case START_LOAD_PHOTOS:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DONE_LOAD_PHOTOS:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.payload,
      });
    default:
      return state;
  }
};

export default photosReducer;
