import { useState, useCallback } from 'react';

export const useStory = () => {
  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateProgress = useCallback(
    () => {
      if (metadata?.duration !== null && currentTime !== null) {
        const elapsedTime = ((currentTime / metadata.duration) * 100);

        return `${elapsedTime.toFixed(2)}%`;
      }

      return '0%';
    }, [metadata, currentTime]);


  return {
    getStory: {
      metadata,
      currentTime,
    },
    setStory: {
      setMetadata,
      setCurrentTime,
      updateProgress
    }
  };
}

