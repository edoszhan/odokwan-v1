import { Text, View, ScrollView, StyleSheet, FlatList, TouchableHighlight, Image } from "react-native";
import React from "react";
import {Icon} from "@rneui/themed"
import { Button } from 'react-native';


type BookData = {
    title: String;
    author: String;
    page_number: Number;
    image: Number;
    status: Number;
};

const tempData: BookData[] = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        page_number: 223,
        image: require("./img/harrypotter_1.jpg"),
        status: 0,
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
        status: 1,
    },
        {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
        status: 0,
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
        status: 1,
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
        status: 1,
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
        status: 1,
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        page_number: 251,
        image: require("./img/harrypotter_2.jpg"),
        status: 1,
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
            <View style={{alignSelf: "flex-end"}}>{status_icon(item.status)}</View>
            <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
            <Text style={[styles.title, {color: textColor}]}>{item.author}</Text>
        </View>
    </View>
    </TouchableHighlight>
);


const BooklistScreen = ({navigation}) => {

    const renderItem = ({item}: {item: BookData}) => {
        const backgroundColor = "white";
        const color = "black";
        return (
            <Item
                item={item}
                //onPress={()=>{alert("Clicked " + item.title); alert("click click")}}
                onPress={()=>{navigation.navigate("BookDetail", 
                {
                    title: item.title, 
                    author: item.author, 
                    page_number: item.page_number, 
                    image: item.image,
                    status: item.status,
                })}}
                backgroundColor={backgroundColor}
                textColor={color}
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

const status_icon = (status) => {
    const color = status === 0 ? "blue" : "orange";
    const status_text = status === 0 ? "reading" : "done";
    return (
        <View style={[styles.status_icon, {borderColor: color}]}>
            <Text style={{color: color, fontSize: 12, textAlign: "center"}}>{status_text}</Text>
        </View>
    )
};

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
        marginVertical: 10,
        fontSize: 12,
    },
    bookimage: {
        width: 50,
        height: 80,
    },
    status_icon: {
        width: 50,
        height: 25,
        borderRadius: 5,
        justifyContent: "center",
        borderWidth: 1,
    },
})
export {BooklistScreen};