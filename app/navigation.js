import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './home';
import QuizScreen from './quiz';

export default StackNavigator(
  {
    Home: { screen: HomeScreen, },
    Quiz: { screen: QuizScreen, },
  },
  {
    headerMode: 'none',
  }
);
