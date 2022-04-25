import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'
import api from '../api/api';
import { Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const Recipe = ({ recipe, navigation }) => {
    const url = api.defaults.baseURL;
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Details', {
                id: recipe._id
            })}>
                <Card
                    title={recipe.title}>
                    <Avatar
                        rounded
                        size="xlarge"
                        containerStyle={styles.imageStyle}
                        source={{
                            uri: `${url}/uploads/${recipe.photo}`,
                        }}
                    />
                    <Text style={styles.title}>
                        {recipe.title}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {recipe.description}
                    </Text>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

export default withNavigation(Recipe)

const styles = StyleSheet.create({
    imageStyle: {
        alignSelf: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    }
})