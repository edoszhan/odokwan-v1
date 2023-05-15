import * as React from 'react';
import { Button, View, StyleSheet, Pressable, Text, } from 'react-native';
import { Icon } from "@rneui/themed";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const OdokTimerScreen = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const [count, setCount] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const increment = React.useRef(null);

    const startTimer = () => {
        setIsActive(!isActive);
        {
            !isActive ?
            (increment.current = setInterval(() => {
                setCount((count) => count + 1)
            }, 1000))
            :
            (clearInterval(increment.current))
        }
    }

    const resetTimer = () => {
        clearInterval(increment.current)
        setIsActive(false)
        setCount(0)
    }

    const formatTime = () => {
        const getSeconds = `0${(count % 60)}`.slice(-2)
        const minutes = `${Math.floor(count / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(count / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return(
        <View style={styles.container}>
            <View
                style={{
                    height: 250,
                    width: 200,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 30,
                }}
            >
                <Text style={{ fontSize: 20, color: "black" }}>
                    Book Cover
                </Text>
            </View>
            <Text style={{ fontSize: 20, color: "black" }}>
                Book Title
            </Text>
            <Text style={{ fontSize: 30, color: "black" }}>
                {formatTime()}
            </Text>
            <View 
                style={{
                    flexDirection: "row",

                }}
            >
                <Pressable 
                    onPress={startTimer}
                    style={{
                        marginHorizontal: 10,
                    }}
                >
                    <Icon 
                        name={!isActive ? 'play-circle' : 'pause-circle'}
                        type='ionicon'
                        size={60}
                    />
                </Pressable>
                <Pressable 
                    onPress={resetTimer}
                    style={{
                        marginHorizontal: 10,
                    }}
                >
                    <Icon 
                        name='stop-circle'
                        type='ionicon'
                        size={60}
                    />
                </Pressable>
            </View>
            {/* <Button
                title="exit to home"
                onPress={() => navigation.navigate("HomeScreen")}
            /> */}
        </View>
    );
}

export {OdokTimerScreen};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})