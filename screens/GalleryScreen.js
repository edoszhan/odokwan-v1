import { Text, View, ScrollView, StyleSheet, FlatList, TouchableHighlight, Image, Pressable, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { React, useState } from "react";
// import {Icon} from "@rneui/themed"
import { Button } from 'react-native';
import { Overlay } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

// type OdokData = {
//     id: Number;
//     title: String;
//     author: String;
//     read_pages: Number;
//     date: Date;
//     time: Time;
// };



const tempOdokData = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        read_pages: 32,
        date: "2000-01-01",
        time: "18:00",
        minutes: 10,
        seconds: 10,
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        read_pages: 58,
        date: "2001-01-01",
        time: "6:00",
        minutes: 10,
        seconds: 10,
    },
];



const GalleryScreen = () => {

    const [visible, setVisible] = useState(false);
      
    const toggleOverlay = () => {
      setVisible(!visible);
    };
  
    const OverlayExample = () => {

        return (
          <View>
            <Overlay 
                isVisible={visible} 
                onBackdropPress={toggleOverlay} 
                overlayStyle={{borderRadius: 10, backgroundColor: "transparent", elevation: 0}}
            >
                {/* <LinearGradient 
                    colors={["#f37880", "#f78d53", "#fa9c31"]} 
                    style={styles.overlay_linear}
                > */}
                    <ImageBackground
                        style={styles.odokimage}
                        source={require("./img/odokwan_1800.png")}
                        imageStyle={{borderRadius: 30}}
                    >
                    <Text style={{fontSize: 30, marginLeft: 20, marginTop: 35}}>Hey</Text>
                    </ImageBackground>
                {/* </LinearGradient> */}
            </Overlay>
          </View>
        );
      };

    const Odok = ({item, onPress, textColor}) => {
        // How do you make a switch case in react native???
        const chosen_color = item.time === "18:00" ? ["#f37880", "#f78d53", "#fa9c31"] : ["#66d6ff", "#5ab8ff", "#51a3ff"];
        return (
        <TouchableOpacity onPress={onPress} style = {styles.odok_container} activeOpacity={0.7} >
            <LinearGradient 
                colors={chosen_color}
                style={styles.linear}    
            >
                <View style={styles.title_container}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.author_container}>
                    <Text style={styles.author}>{item.author}</Text>
                </View>
                <View style={styles.bottom_container}>
                    <Text style={styles.read_pages}>{item.read_pages} page</Text>
                    <Text style={styles.read_time}>{item.minutes}m {item.seconds}s</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
        );
    };
    
    const renderOdok = ({item}) => {
        return (
            <Odok
                item={item}
                onPress={toggleOverlay}
                textColor={"white"}
            />
        );
    };

    return(
        <View style={{flex: 2}}>
            <View>{OverlayExample()}</View>
            <FlatList
            data={tempOdokData}
            renderItem={renderOdok}
            />
        </View>
    );
}

const color_by_time = [
    {
        time: "6:00",
        color: ["#66d6ff", "#5ab8ff", "#51a3ff"],
    },
    {
        time: "18:00",
        color: ["#f37880", "#f78d53", "#fa9c31"],
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    odok_gallery_container: {
        flex: 1,
        flexDirection: 'column',
    },
    title_container: {
        flex: 1,
    },
    odok_container: {
        // padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "white",
        height: 100,
        borderRadius: 10,
    },
    title: {
        color: "white",
        marginVertical: 5,
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
    author_container: {
        flex: 1,
    },
    author: {
        color: "white",
        marginBottom: 10,
        marginLeft: 15,
        fontSize: 12,
        fontWeight: 'bold',
    },
    bottom_container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: "space-between",
    },
    read_pages: {
        color: "gray",
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },
    read_time: {
        color: "gray",
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        paddingLeft: 20,
    },
    date: {
        color: "white",
        fontSize: 10,
        flex: 1,
        textAlign: "right",
        marginRight: 10,
        marginTop: 10,
        fontWeight: 'bold',
    },
    odokimage: {
        width: 300,
        height: 300,
        borderRadius: 20,
    },
    linear: {
        flex: 1,
        borderRadius: 10,
        flexDirection: 'column',
    },
    overlay_linear: {
        flex: 1,
        borderRadius: 10,
        flexDirection: 'column',
    },
})

export {GalleryScreen};