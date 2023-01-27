import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';

const Starting = () => {
  return (
    <View style={[styles.container, Colors.bgOrange]}>
      <View style={[styles.box, Colors.boxBorder]}>
        <Text>Sign up</Text>
      </View>
      <BackgroundGradient />
      <Card  cardType="starting"/>
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