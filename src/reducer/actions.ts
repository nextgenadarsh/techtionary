import {
  GET_ANSWER,
  GET_ANSWER_SUCCESS,
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  INITIALIZE,
  CHANGE_TOPIC
} from "./action-types";

import { getAnswer, getQuestions } from "../services/data-service";

const changeTopicAction = (dispatch, topicId) => {
  dispatch({ type: CHANGE_TOPIC, topicId });
  getAnswer(dispatch, topicId);
};

const getAnswerAction = (dispatch, payload) => {
  dispatch({
    type: GET_QUESTIONS,
    payload: payload
  });
  getAnswer(dispatch, payload.id);
};

// const getQuestionsAction = (dispatch, payload) => {
//   dispatch({
//     type: GET_QUESTIONS,
//     payload: payload
//   });
//   getQuestions(dispatch, payload.id);
// };

const getQuestionsSuccessAction = (dispatch, payload) => {
  dispatch({
    ...payload,
    type: GET_QUESTIONS_SUCCESS
  });
};

const initializeAction = dispatch => {
  dispatch({
    type: INITIALIZE
  });
};

export { changeTopicAction, initializeAction, getQuestionsSuccessAction };
