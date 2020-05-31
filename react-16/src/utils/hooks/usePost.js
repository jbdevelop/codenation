import { useState } from 'react';


export const usePost = () => {
  const [like, setLike] = useState(false);
  const [follow, toggleFollow] = useState(false);


  return {
    getPost: {
      like,
      follow,
    },
    setPost: {
      setLike,
      toggleFollow,
    }
  };
}

