import React from "react";

import StoryComponent from "../../components/Story";

import "./Stories.scss";
import { useStories } from "../../utils/hooks";

const Stories = ({ stories, getUserHandler }) => {
  const { getStories, setStrories } = useStories({ stories, getUserHandler });

  const Story = () => {
    if (!getStories.showStory) return <></>;

    return (
      <StoryComponent
        story={getStories.selectedStory}
        user={getStories.selectedProfile}
        handleClose={setStrories.handleClose}
      />
    );
  };
  const StoryList = () => {
    return stories.map((story, index) => {
      const profileData = getUserHandler(story.userId);
      if (!profileData) return <></>;
      else
        return (
          <button
            key={story.id}
            onClick={() => setStrories.handleStory(story)}
            className={`user__thumb ${index === 0 && "user__thumb--hasNew"}`}
          >
            <div className="user__thumb__wrapper">
              <img src={profileData?.avatar} alt={profileData?.name} />
            </div>
          </button>
        );
    });
  };

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          <StoryList />
        </div>
      </section>
      <Story />
    </React.Fragment>
  );
};

export default Stories;
