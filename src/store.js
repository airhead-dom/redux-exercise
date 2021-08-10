import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {
  logs: ['FIRST LOG FROM STORE'], // change a slice of state -> logsReducer
  photos: {
    isLoading: false,
    items: [],
  }, // photosReducer
  posts: [], // postsReducers
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
