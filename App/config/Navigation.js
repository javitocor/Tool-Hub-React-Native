import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { Entypo } from '@expo/vector-icons';
import Home from '../screens/Home';
import HistoryHome from '../screens/HistoryHome';
import HistoryDetail from '../screens/HistoryDetail';
import Words from '../screens/Words';
import WordDetail from '../screens/WordDetail';
import News from '../screens/News';
import NewsDetail from '../screens/NewsDetail';
import Header from '../components/Header';
import CustomDrawerContent from '../components/CustomDrawerContent';
import colors from '../constants/colors';

const HistoryStack = createStackNavigator();

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ 
      initialRouteName: "HistoryScreen", 
      header: ({navigation}) => {const title='Historical Facts'; return (<Header title={title} navigation={navigation} />)} }}
    >
      <HistoryStack.Screen name="HistoryScreen" component={HistoryHome} />
      <HistoryStack.Screen name="HistoryDetail" component={HistoryDetail} />
    </HistoryStack.Navigator>
  );
}

const WordStack = createStackNavigator();

function WordStackScreen() {
  return (
    <WordStack.Navigator screenOptions={{ 
      initialRouteName: "WordsScreen", 
      header: ({navigation}) => {const title='Dictionary'; return (<Header title={title} navigation={navigation} />)} }}
    >
      <WordStack.Screen name="WordsScreen" component={Words} />
      <WordStack.Screen name="WordDetail" component={WordDetail} />
    </WordStack.Navigator>
  );
}

const NewsStack = createStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator screenOptions={{ 
      initialRouteName: "NewsScreen", 
      header: ({navigation}) => {const title='Top News'; return (<Header title={title} navigation={navigation} />)} }}
    >
      <NewsStack.Screen name="NewsScreen" component={News} />
      <NewsStack.Screen name="NewsDetail" component={NewsDetail} />
    </NewsStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="Home"
        component={Home} 
        options={{ 
          drawerLabel: 'Home',
          drawerActiveTintColor: colors.green,
          drawerActiveBackgroundColor: colors.white,
          drawerInactiveTintColor: colors.white,
          drawerInactiveBackgroundColor: colors.grey,
          drawerHideStatusBarOnOpen:false,
          header: (props) => <Header {...props} />,
          drawerIcon: ({focused}) => (
            <Entypo
              name="home"
              size={20}
              color={focused ? colors.green : colors.white}
            />
          )            
         }} 
      />
      <Drawer.Screen 
        name="History"
        component={HistoryStackScreen} 
        options={{ 
          drawerLabel: 'History',
          drawerActiveTintColor: colors.blue,
          drawerActiveBackgroundColor: colors.white,
          drawerInactiveTintColor: colors.white,
          drawerInactiveBackgroundColor: colors.grey,
          drawerHideStatusBarOnOpen:false,
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Entypo
              name="archive"
              size={20}
              color={focused ? colors.blue : colors.white}
            />
        )            
       }}
      />
      <Drawer.Screen 
        name="Dictionary" 
        component={WordStackScreen} 
        options={{ 
          drawerLabel: 'Dictionary',
          drawerActiveTintColor: colors.red,
          drawerActiveBackgroundColor: colors.white,
          drawerInactiveTintColor: colors.white,
          drawerInactiveBackgroundColor: colors.grey,
          drawerHideStatusBarOnOpen:false,
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Entypo
              name="pencil"
              size={20}
              color={focused ? colors.red : colors.white}
            />
        )    
        }}
      />
      <Drawer.Screen 
        name="News" 
        component={NewsStackScreen} 
        options={{ 
          drawerLabel: 'News',
          drawerActiveTintColor: colors.green,
          drawerActiveBackgroundColor: colors.white,
          drawerInactiveTintColor: colors.white,
          drawerInactiveBackgroundColor: colors.grey,
          drawerHideStatusBarOnOpen:false,
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Entypo
              name="news"
              size={20}
              color={focused ? colors.green : colors.white}
            />
        )    
         }}
      />
    </Drawer.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <DrawerNavigation />
  </NavigationContainer>
);