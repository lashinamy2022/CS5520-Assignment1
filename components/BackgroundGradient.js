import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './Card';

const BackgroundGradient = () => {
    return (
      <LinearGradient
        // Background Linear Gradient
        colors={['skyblue', 'transparent']}
        style={styles.background}
      /> 
    );
}

export default BackgroundGradient;

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
    }
  });
  