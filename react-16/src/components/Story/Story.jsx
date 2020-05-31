import React from "react";

import { Link } from "react-router-dom";

import "./Story.scss";
import { useStory } from "../../utils/hooks";

const Story = ({ story, user, handleClose }) => {
  const { setStory } = useStory();

  const VideoOfStory = () =>
    story.videoUrl && (
      <div className="container">
        <section className="story__video__wrapper">
          <video
            autoPlay
            className="video-player"
            loop
            playsInline
            onTimeUpdate={(e) => setStory.setCurrentTime(e.target.currentTime)}
            onLoadedMetadata={(e) => {
              setStory.setMetadata({
                videoHeight: e.target.videoHeight,
                videoWidth: e.target.videoWidth,
                duration: e.target.duration,
              });
            }}
            src={story.videoUrl}
          />
        </section>
      </div>
    );

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.name} />
            </Link>

            <Link to={`/users/${user.username}`} className="user__name">
              {user.name}
            </Link>
          </div>

          <button className="story__close" onClick={() => handleClose()}>
            <i className="fas fa-times" />
          </button>
        </header>

        <div className="story__progress">
          <div
            style={{ width: setStory.updateProgress() }}
            className="story__progress__elapsed"
          />
        </div>
      </div>

      {VideoOfStory()}
    </section>
  );
};

export default Story;
