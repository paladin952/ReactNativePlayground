import React from 'react';
import {StackNavigator} from 'react-navigation';
import SplashScreen from "./src/pages/splash-screen";
import MainList from "./src/pages/main-list-page";
import MovieDetails from "./src/pages/movie-details";

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
            title: "Most popular",
            headerLeft: null
        }
    },
    MovieDetails: {
        screen: MovieDetails,
        navigationOptions: {
            title: "Details",
        }
    }
},);

export default App;
