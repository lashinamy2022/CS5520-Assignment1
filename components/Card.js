import {StyleSheet, View, Text, TextInput, Modal, Image, Alert} from 'react-native';
import { useState } from 'react';
import React from 'react'
import Colors from '../screens/Colors';
import Label from './Label';
import Input from './Input';
import CardButton from './CardButton';


const Card = ({cardType, cardStyle, pressButton, emailValue, phoneValue, setEmailFun, setPhoneFun}) => {
  function Content() { 
      if (cardType == 'starting') {
        return (
          <>
            <View>
              <Label text="Email address"/>
              <Input type="email" setEmailText={(email)=>{
                  setEmailFun(email);
              }} value={emailValue} />
              <Label text="Phone number"/>
              <Input type="phone" setPhoneText={(phone)=>{
                  setPhoneFun(phone);
              }} value={phoneValue} />
            </View>
            <View style={styles.startButtons}>
              <CardButton type="reset" name="Reset" color="red" pressFun={()=>{
                  setEmail("");
                  setPhone("");
              }}/>
              <CardButton type="signUp" name="Sign up" color="" pressFun={()=>{
                pressButton(2);
              }}/>
            </View>
          </>
        );
    } else if (cardType == 'confirm') {
        const labelStyle = {
          marginTop: 5
        };
        return (
          <>
            <View>
                <Label text="You have entered:" textStyle={{marginTop:10}}/>
                <Label text={emailValue} textStyle={labelStyle}/>
                <Label text={phoneValue} textStyle={labelStyle}/>
                <Label text="Please confirm they are correct." textStyle={labelStyle}/>
            </View>
            <View style={styles.confirmButtons}>
              <CardButton type="goBack" name="Go Back" color="red" pressFun={()=>{
                pressButton(1);
              }}/>
              <CardButton type="confirm" name="Confirm" pressFun={()=>{
                pressButton(3);
              }}/>
              <CardButton type="finishLater" name="Finish later" pressFun={()=>{
                pressButton(4);
              }}/>
            </View>
          </>    
        );
    } else if (cardType == 'thankyou') {
      return (
          <View>
            <Label text="Thank you for signing up.Here's a picture for you(based on the last digit of your phone number)." textStyle={{marginTop:15, fontSize:18}}/>
            <Image source={{uri:'https://picsum.photos/id/1024/100/100'}} style={styles.image}/>
          </View>
      );
    } else if (cardType == 'sorry') {
      return (
        <View>
            <Label text="Sorry to see you go." textStyle={{marginTop:15, fontSize:18, alignSelf:'center'}}/>
            <Image source={require('../assets/sadface.png')} style={styles.image}/>
        </View>
      );
    }
  }
  return (
        <View style={[styles.card, Colors.bgGrey, cardStyle]}>       
            <Content  />
        </View>
  );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        width: 300, 
        height: 350, 
        borderRadius:10, 
        shadowColor: 'black', 
        shadowRadius: 10, 
        shadowOpacity:1
    },
    startButtons: {
      flex:1, 
      flexDirection: 'row', 
      justifyContent:'space-around', 
      marginTop: 30
    },
    confirmButtons: {
      flex:1,
      justifyContent:'space-evenly',
      marginTop:30
    },
    image: {
      width: 100,
      height:100,
      alignSelf: 'center',
      marginTop: 20
    }
});