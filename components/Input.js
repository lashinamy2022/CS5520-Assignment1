import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Colors from '../screens/Colors';
const Input = ({setInputValue, value, setErrMessage}) => {
  return (
    <>
     <TextInput value={value} style={[styles.inputBox, Colors.inputBoxBorderBlue, Colors.inputFontBlue]} 
      onChangeText={(changedText)=>{
        setInputValue(changedText);
        setErrMessage();
      }}
      />
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
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});