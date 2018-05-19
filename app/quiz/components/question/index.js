import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const QuestionComponent = (props) => {
  const { questions, step, updateAnswer } = props;
  const question = step < questions.length ?
    questions[step] : null;

  if (!question) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {question.category}
      </Text>
      
      <View style={styles.questionView}>
        <Text style={styles.p}>
          {question.question}
        </Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateAnswer(step, 'True')}>
            
            <Text style={styles.buttonText}>TRUE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => updateAnswer(step, 'False')}>
            
            <Text style={styles.buttonText}>FALSE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.step}>
        {step + 1} of 10
      </Text>
    </View>
  );
};

export default QuestionComponent;
