import React from 'react';
import {Text, View} from "react-native";

export default class MovieDetails extends React.Component {

    componentDidMount() {
    }

    render() {
        let movie = this.props.navigation.state.params.movie;

        return (
            <View sttle={{flex: 1}}>
                <Text>{movie.original_title}</Text>
            </View>
        )
    }
}