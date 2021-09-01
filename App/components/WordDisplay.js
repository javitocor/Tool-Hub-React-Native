import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  button:{
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    width:'85%',
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  }
});

const WordDisplay = ({item}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.white, colors.grey, colors.red]} style={styles.button}>
        <Text style={styles.text}>{item.definitions[0].definition}</Text>
      </LinearGradient>
    </View>
  );
};

export default WordDisplay;