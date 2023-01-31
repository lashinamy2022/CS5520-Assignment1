import {StyleSheet, View} from 'react-native';
import React from 'react'
import Colors from '../screens/Colors';

const Card = ({cardStyle, children}) => {
  return (
    <View style={[styles.card, Colors.bgGrey, cardStyle]}>   
      {children}
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
   
    
});