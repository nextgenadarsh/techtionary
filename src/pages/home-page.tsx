import React, { useState, useReducer, useEffect } from "react";
import { Topics } from "../components";
import { changeTopicAction, initializeAction } from "../reducer/actions";

const HomePage = ({ history, state, dispatch }) => {
  const handleTopicChange = topic => {
    if (state.selectedTopicId !== topic.id) {
      changeTopicAction(dispatch, topic.id);
      history.push("/topic");
    }
  };
  return (
    <div className="tech-home-page">
      <Topics
        topics={state.topics}
        selectedTopicId={state.selectedTopicId}
        onTopicChange={handleTopicChange}
      />
    </div>
  );
};

export default HomePage;
