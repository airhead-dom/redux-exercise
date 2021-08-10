import React from 'react';
import PhotoGallery from '../features/photosGallery';
import './PhotosPage.css';

// show photos grid
// redux

const PhotosPage = () => {
  return (
    <div className="photos-page">
      <h1 className="text-center">Photos Page</h1>

      <PhotoGallery />
    </div>
  );
};

export default PhotosPage;
