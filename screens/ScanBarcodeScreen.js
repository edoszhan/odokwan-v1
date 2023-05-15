import { Text } from "react-native";
import React, { Component, useState } from 'react';
import { View, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';



const ScanBarcodeScreen = () => {

    const [codeval, setCodeval] = useState('');
    const [openScan, setOpenScan] = useState(false);
    
    
    const onBarcodeScan = (codevalue) => {
        setCodeval(codevalue);
        setOpenScan(false);
        Alert(codevalue)
    };
    
    const onOpenScan = () => {
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: "Permission for Camera",
                            message: "Permission for Camera Required",
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        setCodeval('');
                        setOpenScan(true);
                    } else {
                        Alert("Permission Denied");
                    }
                } catch (err) {
                    Alert('Camera error', err);
                    console.warn(err);
                }
            }
            requestCameraPermission();
        } else {
            setCodeval('');
            setOpenScan(true);
        }
    };
    
    <CameraKitCameraScreen
        showFrame={true}
        scanBarcode={true}
        laserColor={'blue'}
        frameColor={'yellow'}
        colorForScannerFrame={'black'}
        onReadCode={(event) =>
            onBarcodeScan(event.nativeEvent.codeStringValue)
        }
        />

    return(
        <Text>
            here is barcodescan page
        </Text>
    );
}



export {ScanBarcodeScreen};