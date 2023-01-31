import { StyleSheet, View, Text} from 'react-native';
import React, { useState } from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';
import Label from '../components/Label';
import Input from '../components/Input';
import CardButton from '../components/CardButton';
import ErrorText from '../components/ErrorText';
const Starting = ({changeStatus, setEmailFun, setPhoneFun, emailValue, phoneValue}) => {
  const [emailErrMessage, setEmailErrMessage] = useState("");
  const [phoneErrMessage, setPhoneErrMessage] = useState("");

  return (
    <View style={[styles.container, Colors.bgOrange]}>
      <View style={[styles.box, Colors.boxBorder]}>
        <Text>Sign up</Text>
      </View>
      <BackgroundGradient />
          <Card>
            <View>
              <Label text="Email address"/>
              <Input value={emailValue} 
                      setInputValue={(email)=>{
                        setEmailFun(email);
                      }} 
                      setErrMessage={()=>{
                        setEmailErrMessage("");
                        setPhoneErrMessage("");
                      }}/>
              <ErrorText message={emailErrMessage}/>
              <Label text="Phone number"/>
              <Input value={phoneValue} 
                      setInputValue={(phone)=>{
                        setPhoneFun(phone);
                      }}
                      setErrMessage={()=>{
                        setEmailErrMessage("");
                        setPhoneErrMessage("");
                      }} />
              <ErrorText message={phoneErrMessage}/>
            </View>
            <View style={styles.startButtons}>
              <CardButton  name="Reset" color="red" pressFun={()=>{
                  setEmailFun("");
                  setPhoneFun("");
              }}/>
              <CardButton  name="Sign up" color="" pressFun={()=>{
                  let emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
                  let phoneReg =/^[0-9]{10}$/;
                  if (!emailReg.test(emailValue) || !phoneReg.test(phoneValue)) {
                    if (!emailReg.test(emailValue)) {
                      setEmailErrMessage("Please enter a valid email");
                    }
                    if (!phoneReg.test(phoneValue)) {
                      setPhoneErrMessage("Please enter a valid phone number");
                    }
                    return;
                  } 
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