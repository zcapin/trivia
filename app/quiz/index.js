import React from 'react';
import { connect} from 'react-redux';
import { View, Text, Button } from 'react-native';
import { fetchData, updateAnswer, resetQuiz } from './actions';
import { Spinner, Notification } from './../commons';
import Results from './components/results';
import Question from './components/question';
import styles from './styles';

class QuizScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  resetQuiz = () => {
    this.props.resetQuiz();
    this.props.fetchData();
  }

  render() {
    const {
      isLoading, error, step, questions, updateAnswer,
    } = this.props;

    if (step && step >= questions.length) {
      return (
        <Results
          questions={questions}
          resetQuiz={this.resetQuiz}
        />
      );
    }

    if (isLoading || !questions || questions.length === 0) {
      return <Spinner />;
    }

    if (error) {
      return <Notification message={error} />;
    }

    return (
      <Question 
        questions={questions}
        step={step}
        updateAnswer={updateAnswer}
      />
    );
  }
}

const mapState = (state, ownProps) => ({
  isLoading: state.quiz.isLoading,
  error: state.quiz.error,
  step: state.quiz.step,
  questions: state.quiz.questions,
});

const mapDispatch = (dispatch, ownProps) => ({
  fetchData: () =>
    dispatch(fetchData()),
  updateAnswer: (questionId, answer) =>
    dispatch(updateAnswer(questionId, answer)),
  resetQuiz: () =>
    dispatch(resetQuiz()),
});

export default connect(mapState, mapDispatch)(QuizScreen);
