import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Context as RecipeContext } from '../context/RecipeContext'
import { FAB } from 'react-native-paper';
import RecipesList from '../components/RecipesList';
import { Searchbar } from 'react-native-paper';

const RecipesScreen = ({ navigation }) => {
  const { state, getRecipes } = useContext(RecipeContext)
  const [recipes, setRecipes] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getRecipes()
  }, [])
  useEffect(() => {
    setRecipes(state.recipes)
  }, [state.recipes])

  const onChangeSearch = query => {
    setSearchQuery(query)
    const found = state.recipes.filter((r) => r.title.match(searchQuery));
    if (found) {
      setRecipes(found);
    } else {
      setRecipes(state.recipes);
    }
    if (query.length <= 0) {
      setRecipes(state.recipes);
    }
  }
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {recipes.length > 0 ? <RecipesList recipes={recipes} /> : <Text>No recipe</Text>}
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('AddRecipe')}
      />
    </View>
  )
}

export default RecipesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
})