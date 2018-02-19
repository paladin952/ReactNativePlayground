import React from 'react';
import {StackNavigator} from 'react-navigation';
import SplashScreen from "./src/pages/splash-screen";
import MainList from "./src/pages/main-list-page";

// export const AppNavigator = StackNavigator({
//     Splash: {screen: SplashScreen},
//     MainList: {screen: MainList}
// });

const App = StackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null,
        }
    },
    MainList: {
        screen: MainList,
        navigationOptions: {
            title: "Text Title",
            headerLeft: null
        }
    }
},);

export default App;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         paddingTop: 48,
//         backgroundColor: '#ecf0f1',
//     }
// });