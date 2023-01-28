import { View, Text, Button, StyleSheet,Alert } from 'react-native';
import React from 'react';
import Colors from '../screens/Colors';

const CardButton = ({name, color, pressFun}) => {
  return (
    <>
        <Button
        title={name}
        color={color}
        onPress={pressFun}
        />
    </>
  )
};

export default CardButton;