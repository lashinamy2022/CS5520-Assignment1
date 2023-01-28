import { StyleSheet, View, Text, Modal} from 'react-native';
import React from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';

const Confirm = ({changeStatus, emailValue, phoneValue, setEmailFun, setPhoneFun}) => {
  return (
    <>
      <Modal visible={true}>
         <View style={[styles.container, Colors.bgOrange]}>
           <BackgroundGradient />
           <Card cardType="confirm" 
           pressButton={changeStatus} 
           emailValue={emailValue} 
           phoneValue={phoneValue} 
           setEmailFun={setEmailFun} 
           setPhoneFun={setPhoneFun}/>
         </View>
      </Modal>
   </>
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