import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  button:{
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: '15%',
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
  },
  text: {
    width:'85%',
    color: colors.white,
    fontSize: 16,
  }
});

const HistoryDisplay = ({item, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.white, colors.grey, colors.white]}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress} activeOpacity={0.9}>
          <Text style={styles.text}>{item.links.title ? item.links.title : item.links[0].title}</Text>
          <View style={styles.icon}>
            <Entypo name="chevron-right" size={20} color={colors.white} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default HistoryDisplay;