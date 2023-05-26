import * as React from 'react';
import { Button, View } from 'react-native';
import 'react-native-gesture-handler';
import { Text, Image, StyleSheet } from 'react-native';


const BookDetailScreen = ({navigation, route}) => {
    return(
        <View style={styles.container}>
            <View style={styles.detailcontainer}>
                <View style={{flex: 1}}>
                    <Image 
                        source={route.params.image}
                        style={styles.bookimage}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <View style={{marginLeft: 10, marginTop: 5}}>{status_icon(route.params.status)}</View>
                    <Text style={styles.title}>
                        {route.params.title}
                        {/* title */}
                    </Text>
                    <Text style={styles.author}>
                        {route.params.author}
                        {/* author */}
                    </Text>
                    <Text style={styles.page_number}>
                        Total {route.params.page_number}p
                        {/* Total 123p */}
                    </Text>
                </View>
            </View>
            <View 
                style={{
                    borderColor: "black",
                    borderWidth: 0.5,
                    marginBottom: 30,
                    marginHorizontal: 30,
                }}
            />
            <View style={styles.odokcontainer}>
                <Button
                    title="start odok"
                    onPress={() => navigation.navigate("OdokTimer")}
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
    detailcontainer: {
        flex: 1,
        flexDirection: 'row',
    },
    textcontainer: {
        flexDirection: "column",
        flex: 1.3,
    },
    odokcontainer: {
        flex: 1.5,
    },
    title: {
        color: "black",
        marginVertical: 10,
        marginRight: 15,
        fontSize: 15,
    },
    author: {
        color: "black",
        marginVertical: 10,
        fontSize: 12,
    },
    page_number: {
        color: "black",
        marginVertical: 10,
        fontSize: 14,
    },
    bookimage: {
        width: 100,
        height: 160,
        marginLeft: 30,
    },
    status_icon: {
        width: 50,
        height: 25,
        borderRadius: 5,
        justifyContent: "center",
        borderWidth: 1,
    },
})

export {BookDetailScreen};