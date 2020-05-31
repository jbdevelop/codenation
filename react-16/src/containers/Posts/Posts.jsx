import React from "react";

import PostComponent from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => {
  const Post = () =>
    posts.length > 0 &&
    posts.map((post) => (
      <PostComponent
        postInfo={post}
        userInfo={getUserHandler(post.userId)}
        key={post.id}
      />
    ));

  return (
    <div className="container" data-testid="posts">
      <section className="feed">
        <Post />
      </section>
    </div>
  );
};

export default Posts;
