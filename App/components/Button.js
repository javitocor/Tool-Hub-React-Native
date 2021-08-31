import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    borderColor: colors.blue,
    borderWidth: 2, 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.green,
  },
});

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;