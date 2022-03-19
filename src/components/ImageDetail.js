import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    let ImageSource = undefined;
    if (props.title == "Beach") {
        ImageSource = require('../../assets/beach.jpg')
    }
    else if (props.title == "Forest") {
        ImageSource = require('../../assets/forest.jpg')
    }
    else {
        ImageSource = require('../../assets/mountain.jpg')
    }

  return (
      <View style = {styles.viewStyle}>
          <Text style={styles.textStyle}>{props.title}</Text>
          <Image source={ImageSource} style={styles.imageStyle} />
      </View>
  )
    
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue',
    },
    imageStyle: {
        height: 100,
        width: 200,
        margin : 5,
    },
    viewStyle: {
        borderColor: 'red',
        borderWidth: 5,
        margin: 5,
        flexDirection: 'row',
        alignSelf:'center',
    },
})

export default ImageDetail