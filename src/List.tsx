import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

const List = <T,>({ items, renderItem} : ListProps<T>) => {
  return (
    <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
            <View style={styles.itemContainer}>
                {renderItem(item)}
            </View>
        )}
        contentContainerStyle={styles.listContainer}
    />
  )
}
const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,
    },
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8
    }
})
export default List