export const START_LOAD_POSTS = 'START_LOAD_POSTS';
export const DONE_LOAD_POSTS = 'DONE_LOAD_POSTS';
export const START_LOAD_DETAIL_POST = 'START_LOAD_DETAIL_POST';
export const DONE_LOAD_DETAIL_POST = 'DONE_LOAD_DETAIL_POST';

export const startLoadPosts = () => {
  return {
    type: START_LOAD_POSTS,
  };
};

export const doneLoadPosts = (posts) => {
  return {
    type: DONE_LOAD_POSTS,
    payload: posts,
  };
};

export const startLoadDetailPost = () => {
  return {
    type: START_LOAD_DETAIL_POST,
  };
};

export const doneLoadDetailPost = (posts) => {
  return {
    type: DONE_LOAD_DETAIL_POST,
    payload: posts[0],
  };
};

export const loadPosts = () => (dispatch) => {
  // loading state
  dispatch(startLoadPosts());

  // actual api call
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      dispatch(doneLoadPosts(json));
    });
};

export const loadPost = (postId) => (dispatch) => {
  // loading state
  dispatch(startLoadDetailPost());

  // actual api call
  return fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(doneLoadDetailPost(json));
    });
};
