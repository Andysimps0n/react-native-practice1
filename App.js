import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';





export default function App() {
  return (
    <View style={[styles.center, styles.outerMostWrapper]}>
      <View style={[styles.wrapper, styles.border]}>


        {/* Top Header */}
        <View style={[styles.titleContainer, styles.border, styles.center]}>
          <Text style={[styles.large]}>Workout</Text>
        </View>


        <View style={[styles.contentContainer1, styles.border]}>

        </View>



        <View style={[styles.contentContainer1, styles.border]}></View>



      </View>
    </View>
  );
}


