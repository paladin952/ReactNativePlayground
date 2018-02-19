import React from 'react';
import {Image, ScrollView, Text, View, Dimensions} from "react-native";

export default class MovieDetails extends React.Component {

    componentDidMount() {
    }

    render() {
        let movie = this.props.navigation.state.params.movie;
        let screenHeight = Dimensions.get('window').height;

        return (
            <ScrollView style={{height: screenHeight}}>
                <View style={{flex: 1}}>
                    <View style={{height: screenHeight / 3, justifyContent: 'flex-end'}}>
                        <Image
                            style={{
                                backgroundColor: '#ccc',
                                flex: 1,
                                resizeMode: 'cover',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center'
                            }}
                            source={{uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path}}
                        />
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 32,
                            marginBottom: 16,
                            color: 'white',
                            textShadowColor: 'rgba(0, 0, 0, 0.75)',
                            textShadowOffset: {width: -0, height: 1},
                            textShadowRadius: 10
                        }}>
                            {movie.original_title}
                        </Text>
                    </View>
                    <View style={{padding: 16}}>
                        <Text style={{fontSize: 22}}>
                            {movie.overview}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}