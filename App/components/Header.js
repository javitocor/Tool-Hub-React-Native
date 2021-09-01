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
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:'space-between',
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.grey,
  },
  button:{   
    alignItems: 'center',
    justifyContent:'center',
    color: colors.white,
  },
  text:{
    width:'80%',    
    alignItems: 'flex-start',
    justifyContent:'center',
    color: colors.white,
    fontSize: 21,
    fontWeight: 'bold',
    paddingHorizontal:10,
  },
});


function Header({navigation, title}) {
  return (    
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.button}>
        <Entypo name="list" size={32} color={colors.white} />        
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};


export default Header;