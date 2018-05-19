import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const SpinnerComponent = (props) => (
  <ActivityIndicator
    style={styles.spinner}
    size="large"
    color="#000000"
  />
);

export default SpinnerComponent;
