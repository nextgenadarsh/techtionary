import React from "react";
import "./question.scss";

export const Question = ({ question, onQuestionSelect }) => {
  const handleOnQuestionSelect = questionId => {
    onQuestionSelect && onQuestionSelect(questionId);
  }

  return (
    <div className="tech-question" onClick={() => handleOnQuestionSelect(question.id)}>
      <div className="question-tags">
        <h6>
          {question.id + 1}. {question.q}
        </h6>
        <div className="tags">
          {question.tags.map((tag, tagIndex) => (
            <sup className="tag" key={tagIndex}>#{tag}</sup>
          ))}
        </div>
      </div>
    </div>
  );
};
