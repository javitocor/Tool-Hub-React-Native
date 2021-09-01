import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
    flex:1,
  },
  button: {
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: colors.green,
    borderRadius: 3,
  },
  top: {
    flex:1
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  middle: {
    alignItems: 'flex-start',
    justifyContent:'center',
    padding: 15,
    backgroundColor: colors.white
  },
  textMiddle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.purple
  },
  bottom: {
    alignItems: 'flex-start',
    justifyContent:'center',
    padding: 15,
    borderTopWidth: 2,
    borderTopColor: colors.green,
    backgroundColor: colors.white
  },
  textBottom: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.blue
  },
});

const NewDisplay = ({ item, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress} activeOpacity={0.9}>
        <View style={styles.top}>
          <Image source={{uri:item.urlToImage}} resizeMode="cover" style={styles.image} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.textMiddle}>{item.title}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.textBottom}>
            {item.author} 
            {' - '}
            {item.source.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewDisplay;