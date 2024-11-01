import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Hello from './src/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Hello />
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
