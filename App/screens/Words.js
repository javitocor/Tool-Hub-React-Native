import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  Text,
  Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Button from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import colors from '../constants/colors';
import {RESOURCES} from '../constants/constants';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.grey,   
    alignItems: 'center',
    justifyContent:'center',
  },
  content: {
    flex:1,
    width: screen.width * 0.85,
    flexDirection: 'column',    
    alignItems: 'center',
    justifyContent:'center',
  },
  top:{
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 20,
  },
  months: {
    width:'85%',
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 5,
  },
  days: {
    width:'85%',
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 5,
  },
  info: {
    width:'85%',
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 5,
  },
  dropdownStyle: {
    justifyContent:'center',
    width: '100%',
    height: 65,
    borderColor: colors.red,
    borderWidth: 2, 
    borderRadius: 5,
    backgroundColor: colors.grey,
    paddingHorizontal: 10,
    paddingTop: 0,
  },
  button: {    
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    marginTop: 15,
  },
  headerText:{
    fontSize: 22, 
    color: colors.red,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: colors.red,
  },
  inputText: {
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: colors.red, 
    borderRadius: 5,
    paddingHorizontal: 10,
    color: colors.red,
  },
  image: {
    width: screen.width * 0.90,
    height: screen.height * 0.25,
  }
});

const Words = (props) => {
  const {navigation} = props;
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [resource, setResource] = useState('');
  const [word, setWord] = useState('');
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.grey} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <Image source={require('../assets/images/logodictionary.png')} resizeMode='cover' style={styles.image} />
          <Text style={styles.headerText}>Search in our Dictionary</Text>
          <View style={styles.top}>
            <View style={styles.months}>
              <Dropdown 
                label='Select the resource'
                data={RESOURCES}
                onChangeText={(value) => { setResource(value) }}
                fontSize={16}
                labelFontSize={12}
                baseColor={colors.red}
                textColor={colors.red}
                selectedItemColor={colors.grey}
                containerStyle={styles.dropdownStyle}
                value="Definitions"
              />
            </View>
            <View style={styles.days}>
              <TextInput 
                style={styles.inputText}
                placeholder="Type the word here!"
                placeholderTextColor={colors.red}
                placeholderStyle={{ fontWeight: 'bold' }}
                onChangeText={text => setWord(text)}
              />
            </View>
          </View>
          <View style={styles.button}>
            <Button 
              text="Search!"
              onPress={() => {navigation.navigate('WordDetail', {resource, word})}}
            />
          </View>
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Words;