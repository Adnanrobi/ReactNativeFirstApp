import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const uni = [{name: 'BUETadadadad', key: '1'},{name: 'IUTdadaddad', key: '2'},{name: 'DUdadadada', key: '3'},{name: 'SUSTdadadadad', key: '4'}]

    return (
        <View style={styles.viewStyle}>
            <FlatList
                horizontal = {true}
                data={uni}
                renderItem={
                    ({item}) => {
                        return (
                            <View>
                                <Text style={styles.textStyle}>{item.name}</Text>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue',
        marginVertical: 30,
    },
    viewStyle: {
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth:1,
    }
})

export default ListScreen;