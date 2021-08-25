import React from 'react';
import UserPosts from '../features/userPost';
import './PostsPage.css';

const PostsPage = () => {
  return (
    <div className="post-page">
      <h1 className="text-center">Posts Page</h1>

      <div>
        <UserPosts />
      </div>
    </div>
  );
};

export default PostsPage;
