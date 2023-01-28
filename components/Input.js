import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Colors from '../screens/Colors';
const Input = ({setEmailText, setPhoneText, type, value}) => {

  return (
    <>
     <TextInput   style={[styles.inputBox, Colors.inputBoxBorderBlue, Colors.inputFontBlue]} 
      onChangeText={(changedText)=>{
        if (type == 'email') {
          console.log("input:" + changedText);
         //setEmailText(changedText);
        } else if (type == 'phone') {  
          setPhoneText(changedText);
        }
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