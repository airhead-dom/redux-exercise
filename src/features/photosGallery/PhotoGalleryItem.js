import React from 'react';

const PhotoGalleryItem = ({ title, photoUrl }) => {
  return (
    <div className="photo-gallery-item w-100">
      <img className="w-100" src={photoUrl} alt={title} />
      <p className="photo-gallery-item-title mb-0 mt-3 text-center">{title}</p>
    </div>
  );
};

export default PhotoGalleryItem;
