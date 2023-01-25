import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../screens/Colors';
const Input = () => {
  return (
    <>
     <TextInput style={[styles.inputBox, Colors.inputBoxBorderBlue]} />
    </>
  )
};

export default Input;

const styles = StyleSheet.create({
    inputBox: {
        borderBottomWidth:2, 
        width: '90%', 
        height: 50, 
        alignSelf: 'center', 
    }
});