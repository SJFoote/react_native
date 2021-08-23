import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <View style={{ 
          width: 100, 
          height: 100, 
          backgroundColor:'red'
  }}/>
    <View style={{ 
      width: 100, 
      height: 100, 
      backgroundColor:'blue'
  }}/>
      <View style={{ 
        width: 100, 
        height: 100, 
        backgroundColor:'green'
  }}/>
        <View style={{ 
          width: 100, 
          height: 100, 
          backgroundColor:'yellow'
  }}/>
      <Text>Hello World!
      <StatusBar style="auto" />
      </Text>
      <Text>My name is Spencer
      <StatusBar style="auto" />
      </Text>
      <Text>This is my first react native app!
      <StatusBar style="auto" />
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
