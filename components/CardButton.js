import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../screens/Colors';

const CardButton = (props) => {
  return (
    <>
        <Button
        title={props.name}
        color={props.color}
        onPress={() => Alert.alert('Simple Button pressed')}
        />
    </>
  )
};

export default CardButton;