import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import React from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';

const Starting = ({changeStatus, emailValue, phoneValue, setEmailFun, setPhoneFun}) => {
   
  return (
    <View style={[styles.container, Colors.bgOrange]}>
      <View style={[styles.box, Colors.boxBorder]}>
        <Text>Sign up</Text>
      </View>
      <BackgroundGradient />
      <Card  cardType="starting" 
          pressButton={changeStatus}  
          emailValue={emailValue} 
          phoneValue={phoneValue} 
          setEmailFun={setEmailFun} 
          setPhoneFun={setPhoneFun}/>
    
   </View>
  );
};

export default Starting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  box: {
    borderWidth: 2,
    margin: 50,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});