import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{ fontSize : 50}}>Registration form </Text>
      <TextInput placeholder = "Enter Name" 
                style = {{borderWidth : 2,margin :20}}/>
      <TextInput placeholder = "Examle12@gmail.com" 
                style = {{borderWidth : 2,margin :20}}/>
      <TextInput placeholder = "password" 
                style = {{borderWidth : 2,margin :20}}/>
      <TextInput placeholder = "Date of Birth" 
                style = {{borderWidth : 2,margin :20}}/>
      <Button title = "submit" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
});
