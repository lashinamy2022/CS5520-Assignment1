import { StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';
import Label from '../components/Label';
import Input from '../components/Input';
import CardButton from '../components/CardButton';
const Starting = ({changeStatus, setEmailFun, setPhoneFun, emailValue, phoneValue}) => {
  return (
    <View style={[styles.container, Colors.bgOrange]}>
      <View style={[styles.box, Colors.boxBorder]}>
        <Text>Sign up</Text>
      </View>
      <BackgroundGradient />
      {/* <Card  cardType="starting" 
          pressButton={changeStatus}  
          setEmailFun={setEmailFun} 
          setPhoneFun={setPhoneFun}
          emailValue={emailValue}
          phoneValue={phoneValue}/> */}
          <Card>
            <View>
              <Label text="Email address"/>
              <Input value={emailValue} setInputValue={(email)=>{
                        setEmailFun(email);
                      }} />
              <Label text="Phone number"/>
              <Input value={phoneValue} setInputValue={(phone)=>{
                        setPhoneFun(phone);
                      }} />
            </View>
            <View style={styles.startButtons}>
              <CardButton  name="Reset" color="red" pressFun={()=>{
                  setEmailFun("");
                  setPhoneFun("");
              }}/>
              <CardButton  name="Sign up" color="" pressFun={()=>{
                  changeStatus(2);
              }}/>
            </View>
          </Card>
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
  },
  startButtons: {
    flex:1, 
    flexDirection: 'row', 
    justifyContent:'space-around', 
    marginTop: 30
  },
});