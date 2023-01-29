import { View, Text, Button, StyleSheet,Alert } from 'react-native';
import React from 'react';

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