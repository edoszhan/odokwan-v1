import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./tabs";
import 'react-native-gesture-handler';
import { navigationRef } from "./RootNavigation";

const App = () => {
    return(
        <NavigationContainer ref = {navigationRef} >
            <Tabs />
        </NavigationContainer>
    );
}

export default App;