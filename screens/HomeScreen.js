import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { BookDetailScreen } from './BookDetailScreen';
import { Text } from 'react-native';
import * as RootNavigation from "../RootNavigation"




const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Text>
                here is home page
            </Text>
            <Button
            title="book list"
            onPress={() => navigation.navigate("Booklist")}
            
        />
        <Button
            title="book detail"
            onPress={() => RootNavigation.navigate("BookDetail")}
            
        />
        </View>
    );
}

export {HomeScreen};