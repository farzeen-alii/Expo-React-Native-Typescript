import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type OrderStatus = 'Pending' | 'Shipped' | 'Delivered';

type Order = {
    id: number;
    customerName: string;
    status: OrderStatus
}

const orders: Order[] = [
    {id: 1, customerName: 'Farzeen', status: 'Pending'},
    {id: 2, customerName: 'Ali', status: 'Shipped'},
    {id: 3, customerName: 'Huzaifa', status: 'Delivered'},
]

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order List</Text>
      {
        orders.map((order) => (
            <View key={order.id} style={styles.orderItem}>
                <Text>Order ID: {order.id} </Text>
                <Text>Customer Name: {order.customerName} </Text>
                <Text>Status: {order.status} </Text>
            </View>
        ))
      }
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    orderItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10
    }
})
export default Orders