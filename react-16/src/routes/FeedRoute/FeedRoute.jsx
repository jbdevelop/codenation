import React from "react";

import StoriesComponent from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";
import { useFeed } from "../../utils/hooks";

const FeedRoute = () => {
  const { getFeed, setFeed } = useFeed();

  const Stories = () =>
    getFeed.users.length > 0 &&
    getFeed.stories.length > 0 && (
      <StoriesComponent
        stories={getFeed.stories}
        getUserHandler={setFeed.getUserPostById}
      />
    );

  return (
    <div data-testid="feed-route">
      <Stories />
      {getFeed.users.length !== getFeed.usersFetched ? (
        <Loading />
      ) : (
        <Posts posts={getFeed.posts} getUserHandler={setFeed.getUserPostById} />
      )}
    </div>
  );
};

export default FeedRoute;
