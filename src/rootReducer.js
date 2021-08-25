import { combineReducers } from 'redux';
import photosReducer from './features/photosGallery/reducer';
import postsReducer from './features/userPost/reducer';

const rootReducer = combineReducers({
  logs: () => ['FIRST LOG FROM STORE'],
  photos: photosReducer,
  posts: postsReducer,
});

export default rootReducer;
