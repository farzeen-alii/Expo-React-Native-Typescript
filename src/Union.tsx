import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface User {
    name: string;
    age?: number; // Optional Property
}

type MessageType = 'success' | 'error' | 'info'; // Union Type

const getUserMessage = (type: MessageType, user: User): string => {
    // Type Narrowing
    if(type === 'success'){
        return `Welcome ${user.name}! Your age is ${user.age}`;
    } else if(type === 'error'){
        return `Error: Something went wrong, ${user.name ?? 'User'}!`;
    }
    else{
        return `${user.name ?? 'User'}! here is some information about you`;
    }
}

const Union = () => {
    const user : User = { name: 'Farzeen', age: 21 }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{getUserMessage('success', user)}</Text>
      <Text style={styles.text}>{getUserMessage('error', user)}</Text>
      <Text style={styles.text}>{getUserMessage('info', user)}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    }
})

export default Union