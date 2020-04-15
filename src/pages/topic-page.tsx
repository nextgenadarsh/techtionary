import React from "react";

import { Question } from "../components";

import "./topic-page.scss";

const TopicPage = ({ history, state, dispatch }) => {
  const handleQuestionSelect = questionId => {};

  const topic = state.topics.find(t => t.id === state.selectedTopicId);
  const questions = topic ? topic.questions : [];
  return (
    <div className="tech-topic-page">
      <div className="header">
        <button className="btn-back" onClick={() => history.push("/")}>
          Back
        </button>
      </div>
      <h3 align="center">Topic Page</h3>
      {questions.map(question => (
        <Question
          key={question.id}
          question={question}
          onQuestionSelect={handleQuestionSelect}
        />
      ))}
    </div>
  );
};

export default TopicPage;
