import { useState } from 'react';

export const useStories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const findStoryById = (id) => stories.find(story => story.id === id);

  const handleStory = (story) => {
    const foundStory = findStoryById(story.id);
    const profileData = getUserHandler(story.userId);

    setSelectedProfile(profileData);
    setSelectedHistory(foundStory);
    toggleShowStory(!showStory);
  };

  const handleClose = () => toggleShowStory(!showStory);




  return {
    getStories: {
      selectedStory,
      selectedProfile,
      showStory,
    },
    setStrories: {
      handleStory,
      handleClose,
    }
  };
}

