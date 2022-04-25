import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ListElement from "./ListElement";
import { TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";

const InsertableList = ({ list, add }) => {
    const [addElement, setAddElement] = useState("");
    const deleteElementAtIndex = (index) => {
        list.splice(index, 1);
    };
    const addElementToList = (element) => {
        list.push(element);
        setAddElement("");
    };
    return (
        <ScrollView>
            <View style={styles.element}>
                <TextInput
                    multiline={true}
                    style={{ width: 300 }}
                    mode="outlined"
                    onChangeText={(text) => setAddElement(text)}
                    value={addElement}
                    placeholder="Type in here option"
                />
                <TouchableOpacity
                    onPress={() => {
                        addElementToList(addElement);
                        setAddElement("");
                    }}
                >
                    <Entypo name="plus" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <SafeAreaView>
                <View style={styles.container}>
                    <ScrollView key={Math.random().toString(36).substr(2, 9)}>
                        {list.map((value, index) => {
                            return (
                                <View
                                    style={styles.element}
                                    key={Math.random().toString(36).substr(2, 9)}
                                >
                                    <ListElement
                                        elementValue={value}
                                        key={Math.random().toString(36).substr(2, 9)}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {
                                            deleteElementAtIndex(index);
                                        }}
                                    >
                                        <AntDesign
                                            name="minus"
                                            size={24}
                                            color="black"
                                            key={Math.random().toString(36).substr(2, 9)}
                                        />
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default InsertableList;

const styles = StyleSheet.create({
    element: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 10,
    },
    container: {
        maxHeight: 200,
    },
});
