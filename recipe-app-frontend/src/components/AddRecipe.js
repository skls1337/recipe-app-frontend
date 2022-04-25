import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Context as RecipeContext } from "../context/RecipeContext";
import { TextInput, Button } from "react-native-paper";
import { Avatar } from "react-native-elements";
import Spacer from "./Spacer";
import InsertableList from "./InsertableList";
import * as ImagePicker from "expo-image-picker";
import { withNavigation, StackActions } from "react-navigation";

const AddRecipe = ({ navigation }) => {
    const { createRecipe } = useContext(RecipeContext);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredientsList, setIngredientsList] = useState([]);
    const [preparationSteps, setPreparationSteps] = useState([]);
    const [prepTime, setPrepTime] = useState("");

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Sorry, we need camera roll permissions to make this work!");
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <Spacer>
            <TextInput
                mode="outlined"
                label="Recipe title"
                value={title}
                onChangeText={(title) => setTitle(title)}
            />
            <TextInput
                mode="outlined"
                label="Recipe description"
                value={description}
                onChangeText={(description) => setDescription(description)}
            />
            <View>
                <Text>Ingredients</Text>
                <InsertableList list={ingredientsList} />
                <Text>Preparation Steps</Text>
                <InsertableList list={preparationSteps} />
            </View>
            <TextInput
                right={<TextInput.Affix text="min" />}
                mode="outlined"
                keyboardType="numeric"
                label="Preparation Time"
                onChangeText={(min) => setPrepTime(min)}
                value={prepTime.toString()}
            />
            <TouchableOpacity onPress={pickImage}>
                <Text>Pick image</Text>
            </TouchableOpacity>
            {image != null ? (
                <Avatar
                    size="xlarge"
                    containerStyle={styles.imageStyle}
                    source={{
                        uri: image,
                    }}
                />
            ) : null}
            <Button
                onPress={() => {
                    createRecipe(
                        title,
                        description,
                        ingredientsList,
                        preparationSteps,
                        prepTime,
                        image
                    );
                    navigation.dispatch(StackActions.pop(1));
                }}
            >
                Create
            </Button>
        </Spacer>
    );
};

export default withNavigation(AddRecipe);

const styles = StyleSheet.create({
    imageStyle: {
        alignSelf: "center",
    },
});
