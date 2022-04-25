import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import api from '../api/api';
import React from 'react'
import List from '../components/List'
import { Avatar } from 'react-native-elements';
import Spacer from './Spacer'

const RecipeDetails = ({ recipe }) => {
    const url = api.defaults.baseURL;
    return (
        <Spacer>
            {recipe ? (
                <SafeAreaView >
                    <ScrollView>
                        <Text style={styles.title}>{recipe.title}</Text>
                        <Text style={styles.description}>Description{'\n'}{recipe.description}</Text>
                        <Text style={styles.subtitle}>Ingredients: </Text>
                        {recipe.ingredients.length > 0 ? <List list={recipe.ingredients} /> : <Text>No ingredients</Text>}
                        <Text style={styles.subtitle}>Preparation steps: </Text>
                        {recipe.preprationSteps.length > 0 ? <List list={recipe.preprationSteps} /> : <Text>No preparation steps</Text>}
                        <Text style={styles.subtitle}>Preparation Time: {recipe.preparationTime} minutes</Text>
                        {recipe.photo !== 'no-photo.jpg' ? <Avatar
                            size="xlarge"
                            containerStyle={styles.imageStyle}
                            source={{
                                uri: `${url}/uploads/${recipe.photo}`,
                            }}
                        /> : <Text>No image available</Text>}
                    </ScrollView>
                </SafeAreaView >
            ) : null}
        </Spacer>
    )
}

export default RecipeDetails

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#000000',
    },
    subtitle: {
        marginRight: 25,
        marginLeft: 25,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageStyle: {
        marginTop: 20,
        alignSelf: 'center',
        width: 350
    },
    description: {
        marginRight: 25,
        marginLeft: 25,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#000000',
    }
})