import { Text, View, ScrollView, StyleSheet, FlatList, TouchableHighlight, Image } from "react-native";
import React from "react";
import {Icon} from "@rneui/themed"
import { Button } from 'react-native';


type BookData = {
    title: String;
    author: String;
    page_number: Number;
    image: Number;
};

const tempData: BookData[] = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        page_number: 223,
        image: require("./img/harrypotter_1.jpg"),
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
    },
        {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
    },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableHighlight onPress={onPress} style = {[styles.book, {backgroundColor}]}>
    <View style={styles.bookcontainer}>
        <Image 
            style={styles.bookimage}
            source={item.image}
        />
        <View style={{flex: 0.1}}/>
        <View style={styles.titlecontainer}>
            <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
            <Text style={[styles.title, {color: textColor}]}>{item.author}</Text>
        </View>
    </View>
    </TouchableHighlight>
);


const BooklistScreen = ({navigation}) => {

    const renderItem = ({item}: {item: BookData}) => {
        const backgroundColor = "red";
        const color = "white";
        return (
            <Item
                item={item}
                onPress={()=>alert("Clicked " + item.title)}
                backgroundColor={backgroundColor}
                textColor={color}
                image={item.image}
            />
        );
    };
    return(
        <View style={styles.container}>
            <View style={{flex: 2}}>
            <FlatList
                data={tempData}
                renderItem={renderItem}
            />
            </View>
            <View style={{flex: 1}}>
            <Text>
                here is booklist page
            </Text>
            <Button
            title="book detail"
            onPress={() => navigation.navigate("BookDetail")}
        />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bookcontainer: {
        flex: 1,
        flexDirection: 'row',
    },
    titlecontainer: {
        flexDirection: "column",
        flex: 1,
    },
    book: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: "black",
        marginVertical: 5,
    },
    bookimage: {
        width: 50,
        height: 80,
    },
})
export {BooklistScreen};