import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPost } from './actions';
import './UserPosts.css';

const UserPostDetail = ({ id }) => {
  const [detailPost, setDetailPost] = useState(undefined);
  const postsState = useSelector((state) => state.posts);

  useEffect(() => {
    console.log(postsState.items);

    const detailPost = postsState.items.find((item) => item.id === parseInt(id));

    console.log(detailPost);

    setDetailPost(detailPost);
  }, [postsState]);

  return (
    <div className="user-post-detail text-center">
      {detailPost && (
        <>
          <h1 className="font-weight-bold">{detailPost.title}</h1>
          <p>{detailPost.body}</p>
          <p>author: {detailPost.userId}</p>
        </>
      )}

      {!detailPost && <p className="my-0 text-center font-weight-bold">Post detail not found!</p>}
    </div>
  );
};

export default UserPostDetail;
