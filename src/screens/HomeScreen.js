import React from "react";
import { View, Text, StyleSheet, Button , Image , TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

    return (
        <View>
            <Text style={styles.textStyle}> HomeScreen</Text>
            <Button title="Go to ListScreen" onPress={
                function () {
                    props.navigation.navigate('List');
                }
            } />

            <Button title="Go to ImageScreen" onPress={
                function () {
                    props.navigation.navigate('Image');
                }
            } />

            <Button title="StorageScreen" onPress={
                function () {
                    props.navigation.navigate('Storage');
                }
            } />

            <Button title="StateScreen" onPress={
                function () {
                    props.navigation.navigate('State');
                }
            } />

            <Button title="BoxScreen" onPress={
                function () {
                    props.navigation.navigate('Box');
                }
            } />

            <Button title="InputScreen" onPress={
                function () {
                    props.navigation.navigate('Input');
                }
            } />

            <TouchableOpacity onPress={
                function () {
                    console.log('Image pressed!!!')
                }
            }>
            <Image
                source={
                    {
                        height : 300,
                        width : 200,
                        uri : "https://picsum.photos/200/300"
                    }
                }/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color : 'blue',
    },
})

export default HomeScreen;