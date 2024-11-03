import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

enum TicketPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
} 

interface Ticket {
    id: number,
    title: string,
    priority : TicketPriority
}

const Enums = () => {
    const [ticket, setTicket] = useState<Ticket | null>(null);

    const handleCreateTicket = () => {
        const newTicket : Ticket = {
            id: 1,
            title: "Fix Login Issue",
            priority: TicketPriority.High
        };
        setTicket(newTicket);
    }
  return (
    <View style={styles.container}>
        {
            ticket ? (
                <View style={styles.card}>
                    <Text style={styles.text}>Ticket ID: {ticket.id}</Text>
                    <Text style={styles.text}>Title: {ticket.title}</Text>
                    <Text style={styles.text}>Priority: {ticket.priority}</Text>
                </View>
            ) : (
                <Text>No Tickets data available</Text>
            )
        }
        <Button title='Create Ticket' onPress={handleCreateTicket} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        marginBottom: 20,
    }, 
    text: {
        fontSize: 18,
        marginBottom: 5
    }
})
export default Enums