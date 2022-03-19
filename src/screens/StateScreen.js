import React, {useState} from 'react';
import { View, Text, Button ,StyleSheet} from 'react-native-web';


function StateScreen() {
  let [Counter, setCounter] = useState(0);
    return (
      <View>
          <Text style={styles.textStyle}>
             {Counter}
          </Text>

          <Button title='Increase' color = 'green' onPress={
              function () {
                setCounter(Counter + 1)
                }
                
          } />

          <Button title='Decrease' color = 'blue' onPress={
              function () {
                setCounter(Counter - 1)
              }
          } />
      </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: 'black',
  },
});

export default StateScreen;