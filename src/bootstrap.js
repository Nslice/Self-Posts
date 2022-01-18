import * as Font from "expo-font";



export const bootstrap = async () => {
    await Font.loadAsync({
        "open-sans-regular": require("assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("assets/fonts/OpenSans-Bold.ttf")
    });
};