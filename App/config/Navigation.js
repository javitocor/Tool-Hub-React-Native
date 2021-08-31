import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home';
import HistoryHome from '../screens/HistoryHome';
import HistoryDetail from '../screens/HistoryDetail';
import Words from '../screens/Words';
import WordDetail from '../screens/WordDetail';
import News from '../screens/News';
import NewsDetail from '../screens/NewsDetail';
import Header from '../components/Header';

const HistoryStack = createStackNavigator();

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ initialRouteName: "HistoryScreen", header: (props) => <Header {...props} /> }}>
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
      header: ({navigation}) => {const title='hello'; return (<Header title={title} navigation={navigation} />)} }}
    >
      <WordStack.Screen name="WordsScreen" component={Words} />
      <WordStack.Screen name="WordDetail" component={WordDetail} />
    </WordStack.Navigator>
  );
}

const NewsStack = createStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator screenOptions={{ initialRouteName: "NewsScreen", header: (props) => <Header {...props} /> }}>
      <NewsStack.Screen name="NewsScreen" component={News} />
      <NewsStack.Screen name="NewsDetail" component={NewsDetail} />
    </NewsStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{ header: (props) => <Header {...props} /> }} />
      <Drawer.Screen name="History" component={HistoryStackScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Dictionary" component={WordStackScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="News" component={NewsStackScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <DrawerNavigation />
  </NavigationContainer>
);