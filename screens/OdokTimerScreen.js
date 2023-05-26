import React, { useState, useRef, useEffect, } from 'react';
import { 
    Button, 
    View, 
    StyleSheet, 
    Pressable, 
    Text, 
    Animated, 
    TextInput,
    ScrollView,
    Keyboard,
    KeyboardAvoidingView,
    Modal,
} from 'react-native';
import { Icon } from "@rneui/themed";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { useCardAnimation } from '@react-navigation/stack';

const OdokTimerScreen = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const date = new Date();
    const [count, setCount] = useState(0);
    
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const [isActive, setIsActive] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const increment = useRef(null);

    const startTimer = () => {
        setEndTime('');
        setIsActive(!isActive);
        {
            !isActive ?
            (increment.current = setInterval(() => {
                setCount((count) => count + 1)
            }, 1000))
            :
            (clearInterval(increment.current))
        }
        {
            startTime.length === 0 ? 
            setStartTime(`${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`)
            :
            null
        }
        
    }

    const stopTimer = () => {
        clearInterval(increment.current);
        setIsActive(false);
        // setCount(0);
        // navigation.navigate('OdokCreate');
        setModalVisible(true);
        {
            endTime.length === 0 ? 
            setEndTime(`${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`)
            :
            null
        }
        console.log(`${date.getHours()}:${date.getMinutes()}`);
    }

    const formatTime = () => {
        const getSeconds = `0${(count % 60)}`.slice(-2)
        const minutes = `${Math.floor(count / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(count / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    const totalFormatTime = () => {
        const getSeconds = `0${(count % 60)}`.slice(-2)
        const minutes = `${Math.floor(count / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(count / 3600)}`.slice(-2)

        return `${getHours}h ${getMinutes}m ${getSeconds}s`
    }

    // return (
    //     <View style={styles.container}>
    //         <Timer />
    //     </View>
    // )

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
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
                    onPress={stopTimer}
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

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <Pressable 
                    style={[
                        StyleSheet.absoluteFill,
                        { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                    ]}
                    onPress={()=>
                        {
                            setModalVisible(false);
                        }
                    }
                />
                <View
                    style={{
                    padding: 16,
                    width: '100%',
                    // maxWidth: 400,
                    borderRadius: 10,
                    position: "absolute",
                    bottom: 0,
                    height: "70%",
                    backgroundColor: "white",
                    }}
                >

                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}
                    >
                        <Text style={{ fontSize: 20, color: "black" }}>
                            End Odok
                        </Text>
                        <Pressable
                            onPress={() => setModalVisible(false)}
                        >
                            <Icon 
                                name='close'
                                type='antdesign'
                                size={30}
                            />
                        </Pressable>
                    </View>
                    <Pressable 
                        style={{ marginTop: 20, }}
                        onPress={() => Keyboard.dismiss()}    
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                            }}
                        >
                            <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                                Title
                            </Text>
                            <Text>
                                Book Title
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                            }}
                        >
                            <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                                Time
                            </Text>
                            <Text>
                                {`${startTime} ~ ${endTime}`}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                            }}
                        >
                            <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                                Total
                            </Text>
                            <Text>
                                {totalFormatTime()}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                                // backgroundColor:"pink"
                            }}
                        >
                            <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                                Pages
                            </Text>
                            <Text>
                                {`113p ~ `} 
                            </Text>
                            <TextInput 
                                placeholder='type page'
                                style={{
                                    borderWidth: 1,
                                    // height: "100%",
                                    padding: 0,
                                    paddingHorizontal: 10,
                                }}
                                keyboardType='number-pad'
                            />
                            <Text>
                                {` p`} 
                            </Text>
                        </View>
                        <View
                            style={{
                                // flexDirection: "row",
                                // alignItems: "center",
                                marginTop: 10,
                            }}
                        >
                            <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                                Memo
                            </Text>
                            <ScrollView
                                scrollEnabled={false}
                            >
                            <TextInput 
                                placeholder='type text'
                                style={{
                                    borderWidth: 1,
                                    padding: 0,
                                    paddingHorizontal: 10,
                                    paddingVertical: 10,
                                    height: 180,
                                }}
                                multiline={true}
                                textAlignVertical="top"
                            />
                            </ScrollView>
                        </View>

                    </Pressable>
                    <View
                        style={{
                            // flexDirection: "row",
                            alignItems:  "flex-end",
                            justifyContent: "center",
                            marginTop: 10,
                            
                        }}
                    >
                        <Pressable
                            style={{
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                // backgroundColor: 'pink'
                                // width: "20%",
                                paddingHorizontal: 25,
                                paddingVertical: 5,
                            }}
                            onPress={() => navigation.navigate("HomeScreen")}
                        >
                            <Text style={{ fontSize: 15, color: "black" }}>
                                Save
                            </Text>
                        </Pressable>

                    </View>

                </View>


            </Modal>
        </KeyboardAvoidingView>
    );
}

const OdokCreateScreen = ({navigation, route}) => {
    const { colors } = useTheme();
    const { current } = useCardAnimation();

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Pressable
                style={[
                StyleSheet.absoluteFill,
                { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                ]}
                onPress={navigation.goBack}
            />
            <Animated.View
                style={{
                padding: 16,
                width: '100%',
                // maxWidth: 400,
                borderRadius: 10,
                backgroundColor: colors.card,
                position: "absolute",
                bottom: 0,
                height: "70%",
                transform: [
                    {
                    scale: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.9, 1],
                        extrapolate: 'clamp',
                    }),
                    },
                ],
                }}
            >

                <View
                    style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                    }}
                >
                    <Text style={{ fontSize: 20, color: "black" }}>
                        End Odok
                    </Text>
                    <Pressable
                        onPress={navigation.goBack}
                    >
                        <Icon 
                            name='close'
                            type='antdesign'
                            size={30}
                        />
                    </Pressable>
                </View>
                <Pressable 
                    style={{ marginTop: 20, }}
                    onPress={() => Keyboard.dismiss()}    
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                            Title
                        </Text>
                        <Text>
                            Book Title
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                            Time
                        </Text>
                        <Text>
                            14:23 ~ 15:27
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                            Total
                        </Text>
                        <Text>
                            1h 5m 23s
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                            // backgroundColor:"pink"
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                            Pages
                        </Text>
                        <Text>
                            {`113p ~ `} 
                        </Text>
                        <TextInput 
                            placeholder='type page'
                            style={{
                                borderWidth: 1,
                                // height: "100%",
                                padding: 0,
                                paddingHorizontal: 10,
                            }}
                            keyboardType='number-pad'
                        />
                        <Text>
                            {` p`} 
                        </Text>
                    </View>
                    <View
                        style={{
                            // flexDirection: "row",
                            // alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "black", width: 70, }}>
                            Memo
                        </Text>
                        <ScrollView
                            scrollEnabled={false}
                        >
                        <TextInput 
                            placeholder='type text'
                            style={{
                                borderWidth: 1,
                                padding: 0,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                                height: 180,
                            }}
                            multiline={true}
                            textAlignVertical="top"
                        />
                        </ScrollView>
                    </View>

                </Pressable>
                <View
                    style={{
                        // flexDirection: "row",
                        alignItems:  "flex-end",
                        justifyContent: "center",
                        marginTop: 10,
                        
                    }}
                >
                    <Pressable
                        style={{
                            borderWidth: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            // backgroundColor: 'pink'
                            // width: "20%",
                            paddingHorizontal: 25,
                            paddingVertical: 5,
                        }}
                        onPress={() => navigation.navigate("HomeScreen")}
                    >
                        <Text style={{ fontSize: 15, color: "black" }}>
                            Save
                        </Text>
                    </Pressable>

                </View>

            </Animated.View>
        </KeyboardAvoidingView>
    )
}

// Please make a timer that shows the hours, minutes, and seconds. 
// The play button and pause button should be changed every time the user clicks, 
// and there should be a separate stop button.

// const Timer = () => {
//     const [isRunning, setIsRunning] = useState(false);
//     const [time, setTime] = useState(0);
//     const intervalRef = useRef(null);
  
//     const startTimer = () => {
//       setIsRunning(true);
//       intervalRef.current = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     };
  
//     const pauseTimer = () => {
//       setIsRunning(false);
//       clearInterval(intervalRef.current);
//     };
  
//     const stopTimer = () => {
//       setIsRunning(false);
//       clearInterval(intervalRef.current);
//       setTime(0);
//     };
  
//     const formatTime = (totalSeconds) => {
//       const hours = Math.floor(totalSeconds / 3600);
//       const minutes = Math.floor((totalSeconds % 3600) / 60);
//       const seconds = totalSeconds % 60;
  
//       return `${hours.toString().padStart(2, '0')}:${minutes
//         .toString()
//         .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     };
  
//     return (
//       <View>
//         <Text>{formatTime(time)}</Text>
//         {isRunning ? (
//           <Button title="Pause" onPress={pauseTimer} />
//         ) : (
//           <Button title="Play" onPress={startTimer} />
//         )}
//         <Button title="Stop" onPress={stopTimer} />
//       </View>
//     );
//   };

// Please make a timer that shows the hours, minutes, and seconds. 
// The play button and pause button should be changed every time the user clicks, 
// and there should be a separate stop button. 
// If the user presses the stop button, a modal window should be created. 
// The modal window should show the total time recorded by the timer. 
// Also, the modal window should show the time when the timer first started 
// and stopped in hours and minutes, respectively.

// const Timer = () => {
//     const [isRunning, setIsRunning] = useState(false);
//     const [startTime, setStartTime] = useState(null);
//     const [stopTime, setStopTime] = useState(null);
//     const [time, setTime] = useState(0);
//     const [modalVisible, setModalVisible] = useState(false);
//     const intervalRef = useRef(null);
  
//     const startTimer = () => {
//       setIsRunning(true);
//       setStartTime(new Date());
//       intervalRef.current = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     };
  
//     const pauseTimer = () => {
//       setIsRunning(false);
//       clearInterval(intervalRef.current);
//     };
  
//     const stopTimer = () => {
//       setIsRunning(false);
//       clearInterval(intervalRef.current);
//       setStopTime(new Date());
//       setModalVisible(true);
//     };
  
//     const closeModal = () => {
//       setModalVisible(false);
//       setStartTime(null);
//       setStopTime(null);
//       setTime(0);
//     };
  
//     const formatTime = (totalSeconds) => {
//       const hours = Math.floor(totalSeconds / 3600);
//       const minutes = Math.floor((totalSeconds % 3600) / 60);
//       const seconds = totalSeconds % 60;
  
//       return `${hours.toString().padStart(2, '0')}:${minutes
//         .toString()
//         .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     };
  
//     const formatTimeWithHoursMinutes = (date) => {
//       const hours = date.getHours().toString().padStart(2, '0');
//       const minutes = date.getMinutes().toString().padStart(2, '0');
  
//       return `${hours}:${minutes}`;
//     };
  
//     const totalSeconds = Math.floor((stopTime - startTime) / 1000);
//     const totalHoursMinutes = startTime && stopTime ? `${formatTimeWithHoursMinutes(startTime)} - ${formatTimeWithHoursMinutes(stopTime)}` : '';
  
//     return (
//       <View>
//         <Text>{formatTime(time)}</Text>
//         <Button title={isRunning ? 'Pause' : 'Play'} onPress={isRunning ? pauseTimer : startTimer} />
//         <Button title="Stop" onPress={stopTimer} />
  
//         <Modal visible={modalVisible} onRequestClose={closeModal}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalText}>
//               Total Time: {formatTime(time)}
//             </Text>
//             <Text style={styles.modalText}>
//               Start - Stop: {totalHoursMinutes}
//             </Text>
//             <Button title="Close" onPress={closeModal} />
//           </View>
//         </Modal>
//       </View>
//     );
// };
  

// Please make a timer that shows the hours, minutes, and seconds. 
// The play button and pause button should be changed every time the user clicks, 
// and there should be a separate stop button. 
// If the user presses the stop button, a modal window should be created. 
// The modal window should show the total time recorded by the timer. 
// Also, the modal window should show the time when the timer first started and
// stopped in hours and minutes, respectively. 
// That is, the start time and stop time should be expressed in the form of "14:30 ~ 14:40". 
// The start time should not be affected by the pause.

// const Timer = () => {
//     const [isRunning, setIsRunning] = useState(false);
//     const [startTime, setStartTime] = useState(null);
//     const [totalPausedTime, setTotalPausedTime] = useState(0);
//     const [stopTime, setStopTime] = useState(null);
//     const [time, setTime] = useState(0);
//     const [modalVisible, setModalVisible] = useState(false);
//     const intervalRef = useRef(null);
//     const pauseTimeRef = useRef(0);
  
//     const startTimer = () => {
//       setIsRunning(true);
//       if (!startTime) {
//         setStartTime(new Date());
//       }
//       intervalRef.current = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     };
  
//     const pauseTimer = () => {
//       setIsRunning(false);
//       pauseTimeRef.current = new Date();
//       clearInterval(intervalRef.current);
//     };
  
//     const resumeTimer = () => {
//       setIsRunning(true);
//       const pausedTime = new Date() - pauseTimeRef.current;
//       setTotalPausedTime((prevPausedTime) => prevPausedTime + pausedTime);
//       intervalRef.current = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     };
  
//     const stopTimer = () => {
//       setIsRunning(false);
//       clearInterval(intervalRef.current);
//       setStopTime(new Date());
//       setModalVisible(true);
//     };
  
//     const closeModal = () => {
//       setModalVisible(false);
//       setStartTime(null);
//       setTotalPausedTime(0);
//       setStopTime(null);
//       setTime(0);
//     };
  
//     const formatTime = (totalSeconds) => {
//       const hours = Math.floor(totalSeconds / 3600);
//       const minutes = Math.floor((totalSeconds % 3600) / 60);
//       const seconds = totalSeconds % 60;
  
//       return `${hours.toString().padStart(2, '0')}:${minutes
//         .toString()
//         .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     };
  
//     const formatTimeWithHoursMinutes = (date) => {
//       const hours = date.getHours().toString().padStart(2, '0');
//       const minutes = date.getMinutes().toString().padStart(2, '0');
  
//       return `${hours}:${minutes}`;
//     };
  
//     const totalSeconds = Math.floor((stopTime - startTime - totalPausedTime) / 1000);
//     const totalHoursMinutes = startTime && stopTime ? `${formatTimeWithHoursMinutes(startTime)} ~ ${formatTimeWithHoursMinutes(stopTime)}` : '';
  
//     return (
//       <View>
//         <Text>{formatTime(time)}</Text>
//         {isRunning ? (
//           <Button title="Pause" onPress={pauseTimer} />
//         ) : (
//           <Button title="Play" onPress={resumeTimer} />
//         )}
//         <Button title="Stop" onPress={stopTimer} />
  
//         <Modal visible={modalVisible} onRequestClose={closeModal}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalText}>
//               Total Time: {formatTime(time)}
//             </Text>
//             <Text style={styles.modalText}>
//               Start - Stop: {totalHoursMinutes}
//             </Text>
//             <Button title="Close" onPress={closeModal} />
//           </View>
//         </Modal>
//       </View>
//     );
// };



// const Timer = () => {
//     const [timer, setTimer] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const [startTime, setStartTime] = useState(null);
//     const [stopTime, setStopTime] = useState(null);
  
//     useEffect(() => {
//       let intervalId;
  
//       if (isRunning) {
//         intervalId = setInterval(() => {
//           setTimer((prevTimer) => prevTimer + 1);
//         }, 1000);
//       }
  
//       return () => {
//         clearInterval(intervalId);
//       };
//     }, [isRunning]);
  
//     const handlePlayPause = () => {
//       setIsRunning((prevState) => !prevState);
//       if (!isRunning) {
//         setStartTime(new Date());
//       } else {
//         setStopTime(new Date());
//       }
//     };
  
//     const handleStop = () => {
//       setIsRunning(false);
//       setShowModal(true);
//       if (!stopTime) {
//         setStopTime(new Date());
//       }
//     };
  
//     const handleModalClose = () => {
//       setShowModal(false);
//       setTimer(0);
//       setStartTime(null);
//       setStopTime(null);
//     };
  
//     const formatTime = (time) => {
//       const hours = Math.floor(time / 3600);
//       const minutes = Math.floor((time % 3600) / 60);
//       const seconds = time % 60;
  
//       return `${hours.toString().padStart(2, '0')} : ${minutes
//         .toString()
//         .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
//     };
  
//     const formatTimeToHHMM = (time) => {
//       const hours = time.getHours().toString().padStart(2, '0');
//       const minutes = time.getMinutes().toString().padStart(2, '0');
  
//       return `${hours}:${minutes}`;
//     };
  
//     return (
//       <View>
//         <Text>{formatTime(timer)}</Text>
//         <Button
//           title={isRunning ? 'Pause' : 'Play'}
//           onPress={handlePlayPause}
//         />
//         <Button title="Stop" onPress={handleStop} />
  
//         <Modal visible={showModal} animationType="slide" transparent>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text>Total Time: {formatTime(timer)}</Text>
//               {startTime && stopTime && (
//                 <Text>
//                   Start Time: {formatTimeToHHMM(startTime)} ~ End Time:{' '}
//                   {formatTimeToHHMM(stopTime)}
//                 </Text>
//               )}
//               <Button title="Close" onPress={handleModalClose} />
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   };
  

  
// export default Timer;

export {OdokTimerScreen, OdokCreateScreen};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        color: '#fff',
    },
    notesInput: {
        height: 100,
        width: 200,
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 10,
    },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      },
})