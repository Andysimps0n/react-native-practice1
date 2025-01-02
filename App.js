import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';


export default function App() {
  return (
    <View style={[styles.border, styles.outerMostWrapper]}>
      <View style={styles.wrapper}></View>
      <Text style={styles.text}>This is my first act nqddwdqwdative app</Text>
    </View>
  );
}


