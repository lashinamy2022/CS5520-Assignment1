import { StyleSheet, View, Text, Modal} from 'react-native';
import React from 'react';
import Colors from './Colors';
import BackgroundGradient from '../components/BackgroundGradient';
import Card from '../components/Card';
import Label from '../components/Label';
import CardButton from '../components/CardButton';
const Confirm = ({changeStatus, emailValue, phoneValue}) => {
 
  return (
      <Modal visible={true}>
         <View style={[styles.container, Colors.bgOrange]}>
           <BackgroundGradient />
           <Card> 
              <View>
                  <Label text="You have entered:" textStyle={styles.mt10}/>
                  <Label text={emailValue} textStyle={styles.mt5}/>
                  <Label text={phoneValue} textStyle={styles.mt5}/>
                  <Label text="Please confirm they are correct." textStyle={styles.mt5}/>
              </View>
              <View style={styles.confirmButtons}>
                <CardButton  name="Go Back" color="red" pressFun={()=>{
                  changeStatus(1);
                }}/>
                <CardButton  name="Confirm" pressFun={()=>{
                  changeStatus(3);
                }}/>
                <CardButton  name="Finish later" pressFun={()=>{
                  changeStatus(4);
                }}/>
              </View>
           </Card>
         </View>
      </Modal>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mt5: {
    marginTop: 5
  },
  mt10: {
    marginTop: 10
  },
  confirmButtons: {
    flex:1,
    justifyContent:'space-evenly',
    marginTop:30
  },
 
});