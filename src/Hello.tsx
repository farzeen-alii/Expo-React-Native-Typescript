import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface User {
    name: string;
    age: number;
}

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <View style={styles.card}>
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>Age: {user.age}</Text>
    </View>
)

const Hello = () => {
    const [user, setUser] = useState<User>({ name: "Farzeen", age: 21})

    const increaseAge = () => {
        setUser((prevUser) => ({...prevUser, age: prevUser.age + 1}))
    }
  return (
    <View style={styles.container}>
        <UserCard user={user} />
      <Button title='Increase Age' onPress={increaseAge} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 18,
        marginBottom: 3
    }
})

export default Hello