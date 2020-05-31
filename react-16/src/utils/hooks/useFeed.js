import { useFetchUsers } from "./useFetchUsers";
import { useFetchPosts } from "./useFetchPosts";
import { useFetchStories } from "./useFetchStories";

export const useFeed = () => {
  const { getFetchUsers, handleFetchUsers } = useFetchUsers({ isEnableToFetchAllUsers: true });
  const { getFetchPosts } = useFetchPosts({ isEnableToFetchAllPosts: true, users: getFetchUsers.users })
  const { getFetchStories } = useFetchStories();

  return {
    getFeed: {
      users: getFetchUsers.users,
      posts: getFetchPosts.posts,
      stories: getFetchStories.stories,
      usersFetched: getFetchPosts.usersFetched,
    },
    setFeed: {
      getUserPostById: handleFetchUsers.getUserById,

    }
  };
};
