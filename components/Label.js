import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Colors from '../screens/Colors';
const Label = (props) => {
  return (
    <>
      <Text style={[styles.label, Colors.labelBlue]}>
        {props.text}
      </Text>
    </>
  )
};

export default Label;

const styles = StyleSheet.create({
  label: {
      fontSize:20, 
      marginLeft: 13, 
      marginTop: 40,
  },
});
