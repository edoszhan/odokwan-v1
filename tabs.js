import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon, BottomSheet, ListItem } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {HomeScreen} from "./screens/HomeScreen"
import { BooklistScreen } from "./screens/BooklistScreen";
import { GalleryScreen } from "./screens/GalleryScreen";
import { AnalyticsScreen } from "./screens/AnalyticsScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { OdokTimerScreen } from "./screens/OdokTimerScreen";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";







const Tab = createBottomTabNavigator();

const stackHome = createStackNavigator()

function HomeStack({navigation, route}) {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName ==="HomeScreen" || routeName === undefined){
            navigation.setOptions({ tabBarStyle : {display: 'flex' , position: "absolute",
            bottom: 25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:"#ffffff",
            borderRadius:15,
            height:90,
            ...styles.shadow}});
    }
        else {
            navigation.setOptions({ tabBarStyle : {display: 'none' }, });
        }
    }, [navigation, route]);
    return(
        <stackHome.Navigator initialRouteName="HomeScreen" >
            <stackHome.Screen name="HomeScreen" component={HomeScreen} options={{title:"ODOK"}}/>
        </stackHome.Navigator>
    )
}


const stackBookList = createStackNavigator()



function BookListStack({navigation, route}) {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName ==="BookListScreen" || routeName === undefined){
            navigation.setOptions({ tabBarStyle : {display: 'flex' , position: "absolute",
            bottom: 25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:"#ffffff",
            borderRadius:15,
            height:90,
            ...styles.shadow}});
    }
        else {
            navigation.setOptions({ tabBarStyle : {display: 'none' }, });
        }
    }, [navigation, route]);
    return(
        <stackBookList.Navigator initialRouteName="BookListScreen" options = {{initialRouteName:"BookListScreen"}} >
            <stackBookList.Screen name="BookListScreen" component={BooklistScreen} options={{title:"ODOK"}}/>
            <stackBookList.Screen name="BookDetail" component={BookDetailScreen} options={{title:"Book Detail"}}/>
            <stackBookList.Screen name="OdokTimer" component={OdokTimerScreen} options={{title:"ODOK"}}/>
        </stackBookList.Navigator>
    )
}



const Tabs = () => {

    const [isVisible, setIsVisible] = useState(false);
    const list = [
    { title: 'search with book name' },
    { title: 'search with book barcode' },
    { title: 'type book information directly'},
    ];


    return(

            <SafeAreaProvider>
                {/* this is the bottom tab of app */}
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel:false,
                        bottom:25,
                        tabBarStyle:{
                            position: "absolute",
                            bottom: 25,
                            left:20,
                            right:20,
                            elevation:0,
                            backgroundColor:"#ffffff",
                            borderRadius:15,
                            height:90,
                            ...styles.shadow
                        }
                    }} >
                    <Tab.Screen name = "Home" component={HomeStack} options={{title:"ODOK",
                        headerShown:false,
                        tabBarIcon: ({focused}) =>(
                            <View style ={{alignItems:"center", justifyContent:"center", bottom: 3}} >
                                <Icon name='home' 
                                color = {focused ? "#e32f45" : "#748c94"}
                                iconProps={{
                                    size:30
                                    }}  />
                                <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize:12, top:5}} >
                                    Home
                                </Text>
                            </View>
                    )}}/>
                    <Tab.Screen name = "Booklist" component={BookListStack} options={{title:"ODOK",
                    headerShown:false,
                        tabBarIcon: ({focused}) =>(
                            <View style ={{alignItems:"center", justifyContent:"center", bottom: 3}} >
                                <Icon name='library-books' 
                                color = {focused ? "#e32f45" : "#748c94"}
                                iconProps={{
                                    size:30
                                    }}  />
                                <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize:12, top:5}} >
                                    Booklist
                                </Text>
                            </View>
                    )}}/>




                    {/* this is the center button */}
                    <Tab.Screen name = "CreateBook" component={HomeScreen}
                        listeners={({navigation}) => ({
                            tabPress: (e) => {
                                e.preventDefault();
                            }
                        })}
                        options={{title:"ODOK",
                        tabBarIcon: ({focused}) =>(
                                <Icon name='add' 
                                color = "#ffffff"
                                iconProps={{
                                    size:50
                                    }}  />
                        ), tabBarButton : (props) => (
                            <TouchableOpacity
                                style = {{
                                    top:-30,
                                    justifyContent:"center",
                                    alignContent:"center",
                                    ...styles.shadow
                                }}
                                onPress={() => setIsVisible(true)}
                                >
                                    <View style={{
                                        width:70,
                                        height:70,
                                        borderRadius:35,
                                        backgroundColor: "#e32f45",
                                        alignContent:"center",
                                        justifyContent:"center"
                                    }}>
                                        <Icon name='add' 
                                            color = "#ffffff"
                                            iconProps={{
                                                size:50
                                                }}  />
                                    </View>
                            </TouchableOpacity>
                        )
                    }}
                    
                    />

                    <Tab.Screen name = "Gallery" component={GalleryScreen} options={{title:"ODOK",
                        tabBarIcon: ({focused}) =>(
                            <View style ={{alignItems:"center", justifyContent:"center", bottom: 3}} >
                                <Icon name='photo' 
                                color = {focused ? "#e32f45" : "#748c94"}
                                iconProps={{
                                    size:30
                                    }}  />
                                <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize:12, top:5}} >
                                    Gallery
                                </Text>
                            </View>
                    )}}/>
                    <Tab.Screen name = "Analytics" component={AnalyticsScreen} options={{title:"ODOK",
                        tabBarIcon: ({focused}) =>(
                            <View style ={{alignItems:"center", justifyContent:"center", bottom: 3}} >
                                <Icon name='bar-chart' 
                                color = {focused ? "#e32f45" : "#748c94"}
                                iconProps={{
                                    size:30
                                    }}  />
                                <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize:12, top:5}} >
                                    Analytics
                                </Text>
                            </View>
                    )}}/>
                </Tab.Navigator>

                {/* this is the bottom sheet of app */}
                <BottomSheet modalProps={{}} isVisible={isVisible} onBackdropPress={()=> setIsVisible(false)}>
                    {list.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                    >
                        <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    ))}
                </BottomSheet>
            </SafeAreaProvider>


    );
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor:"#7f5df0",
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
        }
    }
);

export default Tabs;