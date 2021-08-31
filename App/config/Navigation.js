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


const HistoryStack = createStackNavigator();

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="HistoryScreen" component={HistoryHome} />
      <HistoryStack.Screen name="HistoryDetail" component={HistoryDetail} />
    </HistoryStack.Navigator>
  );
}

const WordStack = createStackNavigator();

function WordStackScreen() {
  return (
    <WordStack.Navigator>
      <WordStack.Screen name="WordsScreen" component={Words} />
      <WordStack.Screen name="WordDetail" component={WordDetail} />
    </WordStack.Navigator>
  );
}

const NewsStack = createStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="NewsScreen" component={News} />
      <NewsStack.Screen name="NewsDetail" component={NewsDetail} />
    </NewsStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={HistoryStackScreen} />
      <Drawer.Screen name="Dictionary" component={WordStackScreen} />
      <Drawer.Screen name="News" component={NewsStackScreen} />
    </Drawer.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <DrawerNavigation />
  </NavigationContainer>
);