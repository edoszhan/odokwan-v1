import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Text } from 'react-native';
import { OdokTimerScreen } from './OdokTimerScreen';


const BookDetailScreen = ({navigation}) => {
    return(
        <View>
            <Text>
                here is book detail page
            </Text>
            <Button
            title="start odok"
            onPress={() => navigation.navigate("OdokTimer")}
        />
        </View>
    );
}

export {BookDetailScreen};