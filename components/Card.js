import {StyleSheet, View, Text, TextInput} from 'react-native'
import React from 'react'
import Colors from '../screens/Colors';
import Label from './Label';
import Input from './Input';
import CardButton from './CardButton';
const Card = () => {
  return (
    <View style={[styles.card, Colors.bgGrey]}>
      <View>
        <Label text="Email address"/>
        <Input type="email"/>
        <Label text="Phone number"/>
        <Input type="phone"/>
      </View>
      <View style={styles.buttons}>
        <CardButton name="Reset" color="red"/>

        <CardButton name="Sign up" color=""/>
      </View>
    </View>
  )
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
    buttons: {
      flex:1, 
      flexDirection: 'row', 
      justifyContent:'space-around', 
      marginTop: 30
    }
});