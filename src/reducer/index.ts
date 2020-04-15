import {
  CHANGE_TOPIC,
  INITIALIZE,
  GET_QUESTIONS_SUCCESS
} from "./action-types";

export const initialState = {
  topics: [
    {
      id: "angular",
      label: "Angular",
      iconUrl: `https://angular.io/assets/images/favicons/favicon-144x144.png`,
      questions: [],
      answers: [{ qId: 0, a: `` }]
    },
    {
      id: "dotnetcore",
      label: ".Net Core",
      iconUrl: `https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg`,
      questions: [],
      answers: [{ qId: 0, a: `` }]
    },
    {
      id: "reactjs",
      label: "ReactJs",
      iconUrl: `https://reactjs.org/favicon.ico`,
      questions: [],
      answers: [{ qId: 0, a: `` }]
    }
  ],
  selectedTopicId: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return state;
    case CHANGE_TOPIC:
      return { ...state, selectedTopicId: action.topicId };
    case GET_QUESTIONS_SUCCESS:
      const topic = state.topics.find(t => t.id === action.topicId);
      return {
        ...state,
        topics: [
          ...state.topics.filter(t => t.id !== action.topicId),
          { ...topic, questions: action.result }
        ]
      };
  }
};
