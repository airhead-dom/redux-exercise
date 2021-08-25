import React from 'react';
import { useParams } from 'react-router';
import UserPostDetail from '../features/userPost/UserPostDetail';
import './PostDetailPage.css';

const PostDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="post-detail-page">
      <UserPostDetail id={id} />
    </div>
  );
};

export default PostDetailPage;
