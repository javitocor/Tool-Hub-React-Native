import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
} from 'react-native';
import { 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';


const styles = StyleSheet.create({
  container:{
    height: '100%',
  },
  top:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '100%',
  },
  center:{
    height: '50%',
    padding: 10,
  },
  bottom:{
    height: '20%',
    width: '100%',
  },
  sideMenuProfileIcon:{
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  logout:{
    padding: 10,    
  },
  logoutTouch:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logoutText:{
    width: '80%',
    color: colors.white
  },
  icon:{
    width: '15%',
  },
});

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.grey }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.sideMenuProfileIcon}
            />
          </View>
          <View style={styles.center}>
            <DrawerItemList {...props} style={styles.items} />
          </View>
          <View style={styles.bottom}>
            <DrawerItem
              label="Visit Us"
              onPress={() => Alert.alert('Thank you', 'Please, come back again later')}
              icon={({ focused }) =><Entypo name="info-with-circle" size={20} color={focused ? colors.white : colors.white} />}
              activeTintColor={colors.yellow}
              inactiveTintColor={colors.white}
              style={{padding:10}}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.logout}>
        <TouchableOpacity onPress={() => Alert.alert('Logout Successfully', 'Please, come again later')} style={styles.logoutTouch}>
          <Text style={styles.logoutText}>Logout</Text>
          <View style={styles.icon}>
            <Entypo name="log-out" size={20} color={colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;