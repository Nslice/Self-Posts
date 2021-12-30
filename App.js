import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import AppLoading from "expo-app-loading";
import {bootstrap} from "src/bootstrap";
import {AppNavigation} from "src/AppNavigation";



const App = () => {
    const [isReady, setIsReady] = React.useState(false);

    if (!isReady) {
        return <AppLoading startAsync={bootstrap}
                           onFinish={() => setIsReady(true)}
                           onError={console.error}/>;
    }

    return (
        <AppNavigation/>
    );
}


const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: "open-sans-bold",
        fontSize: 25
    }
});



export default App;