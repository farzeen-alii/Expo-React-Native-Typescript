import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface UserProfile {
    id: number,
    name: string,
    email: string,
    age: number,
    address: string,
}

const updateUserProfile = (updates: Partial<UserProfile>) => {
    console.log('Updating user profile with: ', updates);
}

type BasicUserInfo = Pick<UserProfile, "name" | "email" >

type PublicUserInfo = Omit<UserProfile, "id" | "name" | "email">

const PartialPickOmit = () => {
    const [user, setUser] = useState<UserProfile>({
    id: 1,
    name: "Farzeen",
    email: "farzeen@gmail.com",
    age: 21,
    address: "123 Main ABC",
    })

    const handleUserUpdate = () => {
        updateUserProfile({ age: 21 })
        setUser((prev) => ({...prev, age: prev.age + 1}))
    }

    const basicInfo : BasicUserInfo = {name: user.name, email: user.email};
    const publicInfo : PublicUserInfo = {age: user.age, address: user.address};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic Info:</Text>
      <Text>Name: {basicInfo.name}</Text>
      <Text>Email: {basicInfo.email}</Text>
      <Text style={styles.text}>Public Info:</Text>
      <Text>Age: {publicInfo.age}</Text>
      <Text>Address: {publicInfo.address}</Text>
      <Button title='Update Age' onPress={handleUserUpdate} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
    }
})

export default PartialPickOmit