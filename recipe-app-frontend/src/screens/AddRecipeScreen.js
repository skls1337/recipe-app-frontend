import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import AddRecipe from '../components/AddRecipe'

const AddRecipeScreen = () => {
    return (
        <ScrollView>
            <AddRecipe />
        </ScrollView>
    )
}

AddRecipeScreen.navigationOptions = ({ }) => {
    return {
        title: 'Add Recipe'
    };
};

export default AddRecipeScreen

const styles = StyleSheet.create({})