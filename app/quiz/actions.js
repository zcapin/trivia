import { load } from './api';
import {
  FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, UPDATE_ANSWER, RESET_QUIZ
} from './reducer';

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

const fetchDataSuccess = (questions) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { questions },
});

const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: { error },
});

const fetchData = () => (dispatch) => {
  dispatch(fetchDataRequest());
  return load()
    .then((response) => dispatch(fetchDataSuccess(response.results)))
    .catch((error) => dispatch(fetchDataError(error)));
};

const resetQuiz = () => ({
  type: RESET_QUIZ,
});

const updateAnswer = (questionId, answer) => ({
  type: UPDATE_ANSWER,
  payload: {
    questionId,
    answer,
  },
});

export {
  fetchData,
  updateAnswer,
  resetQuiz
};
