import Config from "../config";
import { getQuestionsSuccessAction } from "../reducer/actions";

// https://raw.githubusercontent.com/nextgenadarsh/techtionary/master/data/qrepo/q-angular.json

const getAnswer = (dispatch, topicId) => {
  const url = `${Config.dataBaseUrl}/qrepo/q-${topicId}.json`;
  fetch(url)
    .then(response => response.json())
    .then(
      result => {
        getQuestionsSuccessAction(dispatch, { topicId: topicId, result });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        // Suppress error for now
      }
    );
};

const getQuestions = (dispatch, topicId) => {
  const url = `${Config.dataBaseUrl}/qrepo/q-${topicId}.json`;
  fetch(url)
    .then(response => response.json())
    .then(
      result => {
        getQuestionsSuccessAction(dispatch, result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        // Suppress error for now
      }
    );
};

export { getAnswer, getQuestions };
