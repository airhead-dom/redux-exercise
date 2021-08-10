export const START_LOAD_PHOTOS = 'START_LOAD_PHOTOS';
export const DONE_LOAD_PHOTOS = 'DONE_LOAD_PHOTOS';

export const startLoadPhotos = () => {
  return {
    type: START_LOAD_PHOTOS,
  };
};

export const doneLoadPhotos = (photos) => {
  return {
    type: DONE_LOAD_PHOTOS,
    payload: photos,
  };
};

export const loadPhotos = () => (dispatch) => {
  // loading state
  dispatch(startLoadPhotos());

  // actual api call
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((json) => {
      dispatch(doneLoadPhotos(json));
    });
};
