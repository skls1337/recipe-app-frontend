import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import Recipe from './Recipe'
import { Context as RecipeContext } from '../context/RecipeContext'

const RecipesList = ({ recipes }) => {
    const { getRecipes } = useContext(RecipeContext)
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getRecipes()
        wait(2000).then(() => {
            setRefreshing(false)
        });
    }, []);
    return (
        <View>

            <FlatList refreshControl={<RefreshControl
                colors={["#9Bd35A", "#689F38"]}
                refreshing={refreshing}
                onRefresh={onRefresh} />} data={recipes} keyExtractor={(item) => item._id} renderItem={({ item }) => {
                    return <Recipe recipe={item} />
                }} />
        </View>

    )
}

export default RecipesList

const styles = StyleSheet.create({

})