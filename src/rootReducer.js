import { combineReducers } from 'redux';
import photosReducer from './features/photosGallery/reducer';

const rootReducer = combineReducers({
  logs: () => ['FIRST LOG FROM STORE'],
  photos: photosReducer,
  posts: () => [],
});

export default rootReducer;
