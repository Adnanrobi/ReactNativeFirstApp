import { View, Text, StyleSheet, TextInput, Switch, Picker } from 'react-native'
import React, {useState} from 'react';
/* import { Picker } from '@react-native-community/picker'; */

const InputScreen = () => {
  const [Username, setUsername] = useState('USERNAME');
  return (
    <View>
          <Text style={styles.textStyle}>{Username}</Text>
          <TextInput placeholder='Username' style={styles.textInputStyle}
              onChangeText={
                  function (currentValue) {
                    setUsername(currentValue);
                }
            }
              onSubmitEditing={
                  function () {
                    console.log(Username)
                  }
              }
              secureTextEntry={true}
          />

          <Picker>
              <Picker.Item label="English" value="english" />
              <Picker.Item label="Bangla" value="bangla" />
              <Picker.Item label="Spanish" value="spanish"/>
          </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue',
        margin: 5,
        padding: 10,
    },
    textInputStyle: {
        borderColor: 'grey',
        borderWidth: 1,
        margin: 5,
        padding: 10,
    }
})

export default InputScreen;