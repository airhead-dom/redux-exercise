import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import UserPostItem from './UserPostItem';
import { loadPosts } from './actions';
import './UserPosts.css';

const UserPosts = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const renderUserPostItem = () => {
    return postsState.items.map((post) => {
      return (
        <Col xs={6}>
          <UserPostItem id={post.id} title={post.title} />
        </Col>
      );
    });
  };

  return (
    <Container fluid>
      <Row>{renderUserPostItem()}</Row>
    </Container>
  );
};

export default UserPosts;
