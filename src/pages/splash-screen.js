import React from 'react';
import {View, Text} from 'react-native';
import {NavigationActions} from 'react-navigation'

export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            this.props.navigation.dispatch(NavigationActions.reset(
                {
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'MainList'})
                    ]
                }));
        }, 1500);
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 48, textAlign: 'center'}}>SPLASH SCREEN</Text>
            </View>
        )
    }

}