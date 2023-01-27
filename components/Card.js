import {StyleSheet, View, Text, TextInput, Modal, Image} from 'react-native';
import { useState } from 'react';
import React from 'react'
import Colors from '../screens/Colors';
import Label from './Label';
import Input from './Input';
import CardButton from './CardButton';


const Card = (props) => {
  
  function Content(props) {
      if (props.type == 'starting') {
        return (
          <>
            <View>
              <Label text="Email address"/>
              <Input type="email"/>
              <Label text="Phone number"/>
              <Input type="phone"/>
            </View>
            <View style={styles.startButtons}>
              <CardButton name="Reset" color="red" />
              <CardButton name="Sign up" color="" />
            </View>
          </>
        );
    } else if (props.type == 'confirm') {
        const labelStyle = {
          marginTop: 5
        };
        return (
          <>
            <View>
                <Label text="You have entered:" textStyle={{marginTop:10}}/>
                <Label text="lashinamy@gmail.com" textStyle={labelStyle}/>
                <Label text="17788096068" textStyle={labelStyle}/>
                <Label text="Please confirm they are correct." textStyle={labelStyle}/>
            </View>
            <View style={styles.confirmButtons}>
              <CardButton name="Go Back" color="red" />
              <CardButton name="Confirm" />
              <CardButton name="Finish later" />
            </View>
          </>    
        );
    } else if (props.type == 'thankyou') {
      return (
          <View>
            <Label text="Thank you for signing up.Here's a picture for you(based on the last digit of your phone number)." textStyle={{marginTop:15, fontSize:18}}/>
            <Image source={{uri:'https://picsum.photos/id/1024/100/100'}} style={styles.image}/>
          </View>
      );
    } else if (props.type == 'sorry') {
      return (
        <View>
            <Label text="Sorry to see you go." textStyle={{marginTop:15, fontSize:18, alignSelf:'center'}}/>
            <Image source={require('../assets/sadface.png')} style={styles.image}/>
        </View>
      );
    }
  }
  return (
        <View style={[styles.card, Colors.bgGrey, props.cardStyle]}>       
            <Content type={props.cardType}/>
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