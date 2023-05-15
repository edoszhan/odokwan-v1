import * as React from 'react';
import { Button, View } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from 'react-native';


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