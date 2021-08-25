import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const UserPostItem = ({ id, title }) => {
  return (
    <Link to={`/posts/${id}`}>
      <Card className="user-post-item-card">
        <Card.Body>
          <p className="user-post-item-title m-0 text-center font-weight-bold">{title}</p>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default UserPostItem;
