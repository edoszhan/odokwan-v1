import * as React from 'react';
import { Button, View } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from 'react-native';


const SearchBookScreen = ({navigation}) => {
    return(
        <View>
            <Text>
                here is odoktimer page
            </Text>
            <Button
            title="go to book info"
            onPress={() => navigation.navigate("BookInfo")}
       />
        </View>
    );
}

export {SearchBookScreen};