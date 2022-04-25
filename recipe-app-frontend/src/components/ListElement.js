import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
    TextInput
} from 'react-native-paper'
const ListElement = ({ elementValue }) => {
    const [text, setText] = useState('')
    return (
        <View>
            <TextInput
                style={{width:300}}
                multiline={true}
                mode='outlined'
                value={elementValue}
                onChangeText={text => setText(text)} />
        </View>
    )
}

export default ListElement

const styles = StyleSheet.create({})