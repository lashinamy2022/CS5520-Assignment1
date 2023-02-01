import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';
import CardButton from '../components/CardButton';
import Label from '../components/Label';
const Finish = ({type, changeStatus, setEmailFun, setPhoneFun, phoneValue}) => {
  console.log(phoneValue==null);
  let phone = "";
  if (phoneValue != null) {
    phone = phoneValue.substring(phoneValue.length - 1, phoneValue.length);
  }
  return (
    <View style={[styles.container, Colors.bgOrange]}>
      <BackgroundGradient />
        {
           (type == "thank") ? (
            <Card cardStyle={{marginTop:80, height: 260}}>
              <Label text="Thank you for signing up.Here's a picture for you(based on the last digit of your phone number)." textStyle={{marginTop:15, fontSize:18}}/>
              <Image source={{uri:'https://picsum.photos/id/'+phone+'/100/100'}} style={styles.image}/>
            </Card>
           ) : (
            <Card cardStyle={{marginTop:80, width: 200, height: 190}}>
               <Label text="Sorry to see you go." textStyle={{marginTop:15, fontSize:18, alignSelf:'center'}}/>
              <Image source={require('../assets/sadface.png')} style={styles.image}/>
            </Card>
           )   
        }
      <CardButton name="Start Again" pressFun={()=>{
        setEmailFun('');
        setPhoneFun('');
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
  },
  image: {
    width: 100,
    height:100,
    alignSelf: 'center',
    marginTop: 20
  }
});