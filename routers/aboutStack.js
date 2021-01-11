import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about';
import Home from '../screens/home';
import Header from '../shared/header';
const screens ={
  About : {
    screen : About,
     navigationOptions: ({navigation})=>{
      return {headerTitle : () => <Header navigation = {navigation} title='About'/>}
  }
}
}
const AboutStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerStyle:{backgroundColor:'ghostwhite'}
  }
});
export default AboutStack;