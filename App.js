import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/home';
import { Card } from 'react-native-paper';
import Navigator from './routers/drawer';
export default function App() {
  return (
    
      
        <Navigator/>
        
  );
}

