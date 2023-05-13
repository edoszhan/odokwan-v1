import { Text, View } from "react-native";
import React from "react";
import {Icon} from "@rneui/themed"
import { Button } from 'react-native';


const BooklistScreen = ({navigation}) => {

    return(
        <View>
            <Text>
                here is booklist page
            </Text>
            <Button
            title="book detail"
            onPress={() => navigation.navigate("BookDetail")}
        />
        </View>
    );
}

export {BooklistScreen};