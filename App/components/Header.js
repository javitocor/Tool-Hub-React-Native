import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({  
  header: {
    width:'100%',    
    height:screen.height*0.1,
    alignItems: 'flex-start',
    justifyContent:'center',
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.grey,
  },
});


function Header({navigation, title}) {
  return (    
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Entypo name="list" size={32} color={colors.white} />
        <Text>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default Header;