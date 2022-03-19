import React, { useState } from 'react';
import { View, Button } from 'react-native';
/* import ImageDetail from '../components/ImageDetail'; */

const CreateRGB = () => {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let str = 'rgb(' + red + ',' + blue + ',' + green + ')';
    return str;
}

const BoxScreen = () => {
    const [color, setColor] = useState('red');
    
    return (
        <View>
            <Button title='Change Color' onPress={
                function () {
                    setColor(CreateRGB());
                }
            } />
            <View style={{ height: 100, width: '100%' , backgroundColor: color }} />
            
        </View> 
        )
}

export default BoxScreen;
