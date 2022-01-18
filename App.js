import React from "react";
import AppLoading from "expo-app-loading";
import {bootstrap} from "src/bootstrap";
import {AppNavigation} from "src/AppNavigation";



const App = () => {
    const [isReady, setIsReady] = React.useState(false);

    if (!isReady) {
        return <AppLoading startAsync={bootstrap}
                           onFinish={() => setIsReady(true)}
                           onError={console.error}
        />;
    }

    return <AppNavigation/>;
};


export default App;