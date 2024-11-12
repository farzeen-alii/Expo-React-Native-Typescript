import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Home = () => {
    const router = useRouter();
    const navigateToProfile = () => {
        router.push({ pathname: 'profile', params: {userId: '12345'}})
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title='Go to Profile' onPress={navigateToProfile} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center', 
    },
    title: {
        fontSize: 20
    }
})
export default Home