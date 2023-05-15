import React, { Component, useState } from 'react';
import { View, PermissionsAndroid, Platform, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CameraScreen} from 'react-native-camera-kit';
//import * as React from 'react';
import 'react-native-gesture-handler';
import { Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


const ScanBarcodeScreen = ({navigation}) => {
    const [codeval, setCodeval] = useState('');
    const [openScan, setOpenScan] = useState(false);
    
    
    const onBarcodeScan = (codeval) => {
        //codeval is the scanned value
        setCodeval(codeval);
        setOpenScan(false);
        alert(codeval)
    };
    
    const onOpenScan = () => {
        if (Platform.OS === 'android') {
            // Asking for Camera permission
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
    


    return(
        <View style={{flex: 1}}>
        {openScan ? (
            <View style={{flex: 1}}>
                <CameraScreen
                showFrame={true}
                scanBarcode={true}
                laserColor={'#e32f45'}
                frameColor={'#e32f45'}
                colorForScannerFrame={'black'}
                onReadCode={(event) =>
                    onBarcodeScan(event.nativeEvent.codeStringValue)
                }
            />
            </View>
        ) : (
        <View style={styles.container}>
          <View style={{flex: 2}}/>
          <View style={{flex: 1}}>
            <View style={styles.btnArea}>
              <TouchableOpacity style={styles.btn} onPress={onOpenScan}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                  }}>
                  Scan Barcode
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 2}}>
            <Text>
                here is barcode scan page
            </Text>
            <Button
            title="go to book info"
            onPress={() => navigation.navigate("BookInfo")}
            />
        </View>
        </View>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    btnArea: {
      height: hp(8),
      //backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: hp(1.5),
      paddingBottom: hp(1.5),
    },
    btn: {
      flex: 1,
      width: wp(50),
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e32f45',
    },
  });


export {ScanBarcodeScreen};