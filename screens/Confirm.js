import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';

const Confirm = () => {
  return (
    <View style={[styles.container, Colors.bgOrange]}>
      <BackgroundGradient />
      <Card cardType="confirm"/>
   </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});