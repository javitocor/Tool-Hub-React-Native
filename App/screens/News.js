import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Button from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import colors from '../constants/colors';
import {CATEGORY} from '../constants/constants';

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
    borderColor: colors.green,
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
    color: colors.green,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: colors.green,
  },
  inputText: {
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: colors.green, 
    borderRadius: 5,
    paddingHorizontal: 10,
    color: colors.green,
  },
  image: {
    width: screen.width * 0.90,
    height: screen.height * 0.25,
  }
});

const News = (props) => {
  const {navigation} = props;
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [category, setCategory] = useState('Business');
  const [param, setParam] = useState('');
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.grey} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <Image source={require('../assets/images/logoheadlines.png')} resizeMode='cover' style={styles.image} />
          <View style={styles.top}>
            <View style={styles.months}>
              <Dropdown 
                label='Select Category'
                data={CATEGORY}
                onChangeText={(value) => { setCategory(value) }}
                fontSize={16}
                labelFontSize={12}
                baseColor={colors.green}
                textColor={colors.green}
                selectedItemColor={colors.grey}
                containerStyle={styles.dropdownStyle}
                value="Business"
              />
            </View>
            <View style={styles.days}>
              <TextInput 
                style={styles.inputText}
                placeholder="Type the Keyword!"
                placeholderTextColor={colors.green}
                placeholderStyle={{ fontWeight: 'bold' }}
                onChangeText={text => setParam(text)}
              />
            </View>
          </View>
          <View style={styles.button}>
            <Button 
              text="Search!"
              onPress={() => {navigation.navigate('NewsDetail', {category, param})}}
            />
          </View>
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default News;