import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Provider as RecipeProvider } from "./src/context/RecipeContext";

import RecipesScreen from "./src/screens/RecipesScreen";
import RecipeDetailsScreen from "./src/screens/RecipeDetailsScreen";
import { setNavigator } from "./src/navigationRef";
import AddRecipeScreen from "./src/screens/AddRecipeScreen";

const flowNavigator = createStackNavigator({
  Recipes: RecipesScreen,
  Details: RecipeDetailsScreen,
  AddRecipe: AddRecipeScreen
});

const App = createAppContainer(flowNavigator);

export default () => {
  return (
    <RecipeProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </RecipeProvider>
  );
};
