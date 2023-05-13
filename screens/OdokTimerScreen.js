import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Text } from 'react-native';
import { HomeScreen } from './HomeScreen';


const OdokTimerScreen = ({navigation}) => {
    return(
        <View>
            <Text>
                here is odoktimer page
            </Text>
            <Button
            title="exit to home"
            onPress={() => navigation.navigate("BookListScreen")}
       />
        </View>
    );
}

export {OdokTimerScreen};