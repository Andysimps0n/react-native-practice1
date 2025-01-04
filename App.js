import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from './styles';

import { useState, useRef, useEffect } from 'react';

import TimePicker from './components/TimePicker';


export default function App() {
  const { height, width } = Dimensions.get('window');
  const vh = Math.round((height / 100) * 2) / 2;
  const [nthfocusedMinute, setnthfocusedMinute] = useState(1)
  const [nthfocusedSecond, setnthfocusedSecond] = useState(1)
  
  const minuteArray = new Array(5 + 3).fill(0)
  const secondArray = new Array(3 + 3).fill(0)


  return (
    <View style={[styles.center, styles.outerMostWrapper]}>
      <View style={[styles.wrapper, styles.border]}>


        {/* Top Header */}
        <View style={[styles.titleContainer, styles.center]}>
          <Text style={[styles.large]}>Workout</Text>
        </View>



        <View style={[styles.button1, styles.center]}>Add Workout</View>
        <View style={[styles.button1, styles.center]}>Start Workout</View>

        {/* <View style={[styles.contentContainer1, styles.border]}>
         <TimePicker
          nthfocuse = {nthfocusedMinute}
          timeArray = {minuteArray}
          updateFunction = {setnthfocusedMinute}
         ></TimePicker>

          <TimePicker
            nthfocuse = {nthfocusedSecond}
            timeArray = {secondArray}
            updateFunction = {setnthfocusedSecond}
            isSecond = { true }
          ></TimePicker>
        </View> */}






      </View>
    </View>
  );
}


