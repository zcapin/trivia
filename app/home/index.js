import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const HomeScreen = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Welcome the the Trivia Challenge
    </Text>

    <Text style={styles.p}>
      You will be presented with 10 True or False questions
    </Text>

    <Text style={styles.p}>
      Can you score 100%?
    </Text>
    
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Quiz')}>
      <Text style={styles.buttonText}>BEGIN</Text>
    </TouchableOpacity>
  </View>
);

export default HomeScreen;
