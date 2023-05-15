import * as React from 'react';
import { Button, View } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from 'react-native';


const BookInfoScreen = ({navigation}) => {
    return(
        <View>
            <Text>
                here is book info page
            </Text>
            <Button
            title="go back home"
            onPress={() => navigation.navigate("HomeScreen")}
       />
        </View>
    );
}

export {BookInfoScreen};