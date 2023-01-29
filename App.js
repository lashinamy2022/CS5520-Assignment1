import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import Starting from './screens/Starting';
import Confirm from './screens/Confirm';
import Finish from './screens/Finish';

const App = () => {
  const [status, setStatus] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function changeStatus(changedStatus) {
    setStatus(changedStatus);
  }

  function setEmailFun(email) {
    setEmail(email);
  }

  function setPhoneFun(phone) {
    setPhone(phone);
  }

  if (status == 1) {
    return (
      <Starting changeStatus={changeStatus}
      setEmailFun={setEmailFun} 
      setPhoneFun={setPhoneFun}
      emailValue={email}
      phoneValue={phone}/>
    );
 } else if (status == 2) {
    return (
      <Confirm changeStatus={changeStatus}
      emailValue={email} 
      phoneValue={phone}/>
    );
 } else if (status == 3) {
    return (
      <Finish type='thank' 
      changeStatus={changeStatus}
      phoneValue={phone}
      setEmailFun={setEmailFun} 
      setPhoneFun={setPhoneFun} />
    );
 } else if (status == 4) {
    return (
       <Finish type='sorry' 
      changeStatus={changeStatus}
      setEmailFun={setEmailFun} 
      setPhoneFun={setPhoneFun} />
    );
 }
}


export default  App;