import { useState, useEffect, useCallback } from 'react';


export const useFetchPosts = ({ isEnableToFetchAllPosts = false, users = [] }) => {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usersFetched, setUsersFetched] = useState(0);


  const getPostByUserId = useCallback(async (userId) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userId}/posts`)
      const data = await response.json();
      setUserPosts(data);
      setIsLoading(false);
    } catch (error) {

    }
  }, [])

  useEffect(() => {
    const loadPosts = async () => {
      try {

        const response = await fetch(
          `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`
        );
        const data = await response.json();
        setPosts(prev => ([
          ...prev,
          ...data,
        ]));
        setUsersFetched(usersFetched + 1);
      } catch (error) {

      }
    };
    if ((isEnableToFetchAllPosts) && (usersFetched !== users.length)) loadPosts();
  }, [users, usersFetched, isEnableToFetchAllPosts]);


  return {
    getFetchPosts: {
      posts,
      usersFetched,
      userPosts,
      isLoading,
    },
    handleFetchPosts: {
      getPostByUserId
    }
  };
}

