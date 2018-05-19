// @flow
import { combineReducers } from 'redux';
import quizReducer from './quiz/reducer';

// Root Reducer
const rootReducer = combineReducers({
  quiz: quizReducer,
});

export default rootReducer;
