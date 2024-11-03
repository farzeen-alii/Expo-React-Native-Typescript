import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Enums from './src/Enums';
// import Union from './src/Union';
// import Hello from './src/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Hello /> */}
      {/* <Union /> */}
      <Enums />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
