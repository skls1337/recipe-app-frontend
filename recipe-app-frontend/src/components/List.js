import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const List = ({ list }) => {
    return (
        <View>
            {
                list.map((item, index) => {
                    return <View key={Math.random().toString(36).substr(2, 9)}>
                        <Text key={Math.random().toString(36).substr(2, 9)} style={styles.item}>{index + 1}. {item}</Text>
                    </View>
                })
            }
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    item: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    }
})