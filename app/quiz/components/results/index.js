import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ResultsComponent = (props) => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>
      You scored
    </Text>

    <Text style={styles.title}>
      {props.questions.filter(q => q.isCorrect).length}/10
    </Text>
    
    <TouchableOpacity
      style={styles.playAgainButton}
      onPress={props.resetQuiz}>
      
      <Text style={styles.playAgainButtonText}>PLAY AGAIN?</Text>
    </TouchableOpacity>

    {props.questions && props.questions.map((q, i) => (
      <View style={styles.questionRecap} key={i}>
        <Text style={styles.p}>
          <Text style={styles.marker}>
            {q.isCorrect ? '+  ' : '-  '}
          </Text>
          {q.question}
        </Text>

        <Text style={styles.notice}>
          Correct answer: {q.correct_answer}
        </Text>
      </View>
    ))}
  </ScrollView>
);

export default ResultsComponent;
