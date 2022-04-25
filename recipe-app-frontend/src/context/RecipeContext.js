import createDataContext from "./createDataContext";
import api from '../api/api';
import * as FileSystem from 'expo-file-system';
import { navigate } from '../navigationRef';

const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'add_recipe':
            return { ...state, recipes: [...state.recipes, action.payload] };
        case "get_recipes":
            return { ...state, recipes: action.payload };
        default:
            return state;
    }
};

const getRecipes = (dispatch) => async () => {
    const response = await api.get("/recipes");

    dispatch({ type: "get_recipes", payload: response.data.data });
};

const uploadPhoto = async (id, photo) => {
    let endpoint = api.defaults.baseURL + `/recipes/${id}/photo`;
    let headers = {
        'content-type': 'multipart/form-data',
    };
    let options = {
        headers: headers,
        httpMethod: 'PUT',
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: 'file',
    };

    await FileSystem.uploadAsync(endpoint, photo, options)
}

const createRecipe = (dispatch) => async (title, description, ingredients, preprationSteps, preparationTime, photo) => {
    await api.post('/recipes', {
        title,
        description,
        ingredients,
        preprationSteps,
        preparationTime,
    }).then(async res => {
        dispatch({ type: 'add_recipe', payload: res.data.data })
        if (photo) {
            await uploadPhoto(res.data.data._id, photo).then(() => {
            })
        }
    }).catch((err) => {
        dispatch({
            type: 'add_error',
            payload: 'Error while adding recipe',
        });
    })
}

export const { Provider, Context } = createDataContext(
    recipeReducer,
    { getRecipes, createRecipe },
    {
        recipes: [],
        errorMessage: ''
    }
);
