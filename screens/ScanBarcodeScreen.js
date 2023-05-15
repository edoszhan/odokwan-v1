import * as React from 'react';
import { Button, View } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from 'react-native';


const ScanBarcodeScreen = ({navigation}) => {
    return(
        <View>
            <Text>
                here is barcode scan page
            </Text>
            <Button
            title="go to book info"
            onPress={() => navigation.navigate("BookInfo")}
       />
        </View>
    );
}

export {ScanBarcodeScreen};