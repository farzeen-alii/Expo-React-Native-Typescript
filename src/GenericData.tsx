import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import List from './List';

interface User {
    id: number;
    name: string
}

interface Product {
    id: number;
    title: string;
    price: number
}

const users: User[] = [
    {id: 1, name: 'Farzeen'},
    {id: 2, name: 'Ali'},
]
const products: Product[] = [
    {id: 1, title: 'Laptop', price: 999},
    {id: 2, title: 'Mobile', price: 399},
]

const GenericData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users</Text>
      <List
        items={users}
        renderItem={(user) => (
            <Text style={styles.itemText}>{user.name}</Text>
        )}
      />
      <Text style={styles.heading}>Products</Text>
      <List
        items={products}
        renderItem={(product) => (
            <Text style={styles.itemText}>{product.title} - ${product.price}</Text>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10
    },
    itemText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#555'
    }
})
export default GenericData