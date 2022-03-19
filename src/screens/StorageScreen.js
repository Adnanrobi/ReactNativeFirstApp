import React from 'react';
import { Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const StorageScreen = () => {

  const SetData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      alert("Data added successfully");
    } catch (error) {
      alert(Error)
    }
  }

  const SetDataJSON = async (key, value) => {
    try {
      value = JSON.stringify(value);
      await AsyncStorage.setItem(key, value);
      console.log('value saved')
    } catch (error) {
      alert(Error)
    }
  }

  const GetData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key)
      if (data != null) {
        alert(data)
      } else {
        alert("no data for this key")
      }
    } catch (error) {
      alert(error);
    }
  }
 
  const GetDataJSON = async (key) => {
    try {
      let data = await AsyncStorage.getItem(key)
      if (data != null) {
        data = JSON.parse(data);
        console.log(data);
      } else {
        alert("no data for this key")
      }
    } catch (error) {
      alert(error);
    }
  }

  const DeleteData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log( " data deleted successfully ")
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View>
      <Text>StorageScreen</Text>

      <Button title='set Data' onPress={
        function () {
          SetDataJSON('StudentINFO',
            {
              ID: '08',
              Name: 'Robi',
              Program : 'SWE',
          });
        }
      } />

      <Button title='Get Data' onPress={
        function () {
          GetDataJSON('StudentINFO');
        }
      } />

      <Button title='Remove Data' onPress={
        function () {
          DeleteData('StudentINFO');
        }
      } />
    </View>
  )
}

export default StorageScreen