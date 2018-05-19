import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const NotificationComponent = (props) => (
  <View style={styles.container}>
    <Text style={styles.notification}>
      {props.message}
    </Text>
  </View>
);

export default NotificationComponent;
