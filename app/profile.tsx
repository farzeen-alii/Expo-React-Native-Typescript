import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { RootStackParamList } from '../types'

const Profile = () => {
    const {userId} = useLocalSearchParams<RootStackParamList ['profile']>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.title}>User ID: {userId} </Text>
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
export default Profile