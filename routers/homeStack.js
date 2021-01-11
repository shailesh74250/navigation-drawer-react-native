import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import About from '../screens/about';
import Header from '../shared/header';
const screens ={
  Home : {
    screen : Home,
    navigationOptions: ({navigation})=>{
      return {headerTitle : () => <Header navigation = {navigation} title='Home' />}
  }
}
}
const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerStyle:{backgroundColor:'ghostwhite'}
  }
});
export default HomeStack;