import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';
import CardButton from '../components/CardButton';

const Finish = ({type, changeStatus}) => {
  function Content() {
    if (type == "thank") {
        return (
            <Card  cardType="thankyou" cardStyle={{marginTop:80, height: 260}}/>
        );
    } else if (type == "sorry"){
        return (
            <Card  cardType="sorry" cardStyle={{marginTop:80, width: 200, height: 190}}/>
        );
    }
  }
  return (
    <View style={[styles.container, Colors.bgOrange]}>
      <BackgroundGradient />
        <Content />
      <CardButton name="Start Again" pressFun={()=>{
        changeStatus(1);
      }}/>
   </View>
  );
};

export default Finish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});