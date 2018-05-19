// for simplicity constants are here
// but we usually make constants file if too big
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const RESET_QUIZ = 'RESET_QUIZ';

const initialState = {
  step: 0,
  questions: [],
  isLoading: false,
  error: false,
};

// there is only one selector so i didn't create selectors.js
export const getQuizQuestions = (state) => ({ ...state.quiz.questions });

const quizReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
        state: 0,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        step: 0,
        questions: action.payload.questions.map((q, i) => {
          q.id = i;
          return q;
        }),
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        step: 0,
        isLoading: false,
        error: action.payload.error,
      };
    case UPDATE_ANSWER:
      return {
        ...state,
        step: state.step + 1,
        questions: state.questions.map((q, i) => {
          if (action.payload.questionId === i) {
            if (action.payload.answer === q.correct_answer) {
              q.isCorrect = true;
            }
          }

          return q;
        }),
      };
    case RESET_QUIZ:
      return {
        ...state,
        isLoading: true,
        error: false,
        step: 0,
        questions: [],
      };
    default: {
      return state;
    }
  }
};

export default quizReducer;
