import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  Alert,
  Text,
  Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Button from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import colors from '../constants/colors';
import {MONTHS, INFO} from '../constants/constants';

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
    borderColor: colors.white,
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
    color: colors.white,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: colors.white,
  },
  inputText: {
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: colors.white, 
    borderRadius: 5,
    paddingHorizontal: 10,
    color: colors.white,
  },
  image: {
    width: screen.width * 0.90,
    height: screen.height * 0.25,
  }
});

const HistoryHome = (props) => {
  const {navigation} = props;
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [info, setInfo] = useState('');

  const onSubmit = (days) => {
    if (days > 1 && days <= 31) {
      navigation.navigate('HistoryDetail', {month, day, info})
    } else {
      Alert.alert('Incorrect Day!', 'Day must be between 1 and 31')
    };
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.grey} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <Image source={require('../assets/images/logohistoric.png')} resizeMode='cover' style={styles.image} />
          <Text style={styles.headerText}>Choose the date</Text>
          <View style={styles.top}>
            <View style={styles.months}>
              <Dropdown 
                label='Select Month'
                data={MONTHS}
                onChangeText={(value) => { setMonth(value) }}
                fontSize={16}
                labelFontSize={12}
                baseColor={colors.white}
                textColor={colors.white}
                selectedItemColor={colors.grey}
                containerStyle={styles.dropdownStyle}
                value="January"
              />
            </View>
            <View style={styles.days}>
              <TextInput 
                style={styles.inputText}
                keyboardType="numeric"
                placeholder="Type here the day!"
                placeholderTextColor={colors.white}
                placeholderStyle={{ fontWeight: 'bold' }}
                onChangeText={text => setDay(text)}
              />
            </View> 
            <View style={styles.info}>
              <Dropdown 
                label='Select type of Info'
                data={INFO}
                onChangeText={(value) => { setInfo(value) }}
                fontSize={16}
                labelFontSize={12}
                baseColor={colors.white}
                textColor={colors.white}
                selectedItemColor={colors.grey}
                containerStyle={styles.dropdownStyle}
                value="All"
              />
            </View> 
          </View>
          <View style={styles.button}>
            <Button 
              text="Search!"
              onPress={() => onSubmit(day)}
            />
          </View>
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryHome;