import { useState, useEffect } from 'react';

// import { Container } from './styles';

export const useFetchStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const loadStories = async () => {
      try {

        const response = await fetch(
          "https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories"
        );
        const data = await response.json();
        setStories(data);
      } catch (error) {

      }
    };
    loadStories();
  }, []);

  return {
    getFetchStories: {
      stories,
    }
  };
}

