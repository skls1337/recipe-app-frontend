import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as RecipeContext } from '../context/RecipeContext'
import RecipeDetails from '../components/RecipeDetails'

const RecipeDetailsScreen = ({ navigation }) => {
  const { state } = useContext(RecipeContext)
  const id = navigation.getParam('id');
  const recipe = state.recipes.find(recipe => recipe._id === id)
  return (
    <View style={styles.container}>
      <RecipeDetails recipe={recipe} />
    </View>
  )
}

export default RecipeDetailsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignSelf: 'center',
  }
})