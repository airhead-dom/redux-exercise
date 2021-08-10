import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import PhotoGalleryItem from './PhotoGalleryItem';
import { loadPhotos } from './actions';
import './PhotoGallery.css';

const PhotosGallery = () => {
  const dispatch = useDispatch();
  const photosState = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(loadPhotos());
  }, []);

  const renderPhotoGalleryItem = () => {
    return photosState.items.map((photo) => {
      return (
        <Col md={4} lg={3}>
          <PhotoGalleryItem title={photo.title} photoUrl={photo.thumbnailUrl} />
        </Col>
      );
    });
  };

  return (
    <Container fluid>
      {photosState.isLoading && (
        <div className="text-center">
          <Spinner animation="border" color="#000" />
        </div>
      )}

      {!photosState.isLoading && <Row>{renderPhotoGalleryItem()}</Row>}
    </Container>
  );
};

export default PhotosGallery;
