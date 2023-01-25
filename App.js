import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Colors from './screens/Colors';
import BackgroundGradient from './components/BackgroundGradient';
import Card from './components/Card';
export default function App() {
  return (
   <View style={[styles.container, Colors.bgOrange]}>
      <BackgroundGradient />
      <Card />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});