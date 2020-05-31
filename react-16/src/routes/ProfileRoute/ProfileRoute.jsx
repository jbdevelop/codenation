import React, { useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";
import { useFetchUsers, useFetchPosts } from "../../utils/hooks";

const ProfileRoute = () => {
  const {
    handleFetchUsers: { getUserByName },
    getFetchUsers: { user },
  } = useFetchUsers({
    isEnableToFetchAllUsers: false,
  });

  const {
    handleFetchPosts: { getPostByUserId },
    getFetchPosts,
  } = useFetchPosts({
    isEnableToFetchAllPosts: false,
  });

  useEffect(() => {
    const loadUser = async () => {
      const { pathname } = window.location;
      const param = pathname.split("/")[2];
      await getUserByName(param);
    };
    loadUser();
  }, [getUserByName]);

  useEffect(() => {
    const loadUserPosts = async () => {
      await getPostByUserId(user.id);
    };
    if (user.id) loadUserPosts();
  }, [user.id, getPostByUserId]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={user.name}
        avatar={user.avatar}
        username={user.username}
        email={user.email}
      />

      {getFetchPosts.isLoading ? (
        <Loading />
      ) : (
        <UserPosts posts={getFetchPosts.userPosts} />
      )}
    </div>
  );
};

export default ProfileRoute;
