import React from 'react';
import {Image, ScrollView, Text, View, Dimensions} from "react-native";
import * as ApiService from "../services/api-service";

export default class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        let movie = this.props.navigation.state.params.movie;
        ApiService.getReviews(movie.id)
            .then(response => {
                this.setState({
                    reviews: response.data.results || []
                })
            }).catch(ignore => {
        });
    }

    render() {
        let movie = this.props.navigation.state.params.movie;
        let screenHeight = Dimensions.get('window').height;
        let screenWidth = Dimensions.get('window').width;
        let imageHeight = Math.min(screenWidth, screenHeight);

        let reviewsViews = this.state.reviews.map((item) => {
            return (
                <View key={item.id} style={{marginBottom: 16, marginRight: 16, marginLeft: 16}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                        {item.author}
                    </Text>
                    <Text style={{fontSize: 20, fontStyle: 'italic'}}>
                        {item.content}
                    </Text>
                    <View style={{height: 0.33, width: '100%', backgroundColor: 'gray', marginTop: 8}}/>
                </View>
            )
        });

        return (
            <ScrollView style={{height: screenHeight}}>
                <View style={{flex: 1}}>
                    <View style={{height: imageHeight, justifyContent: 'flex-end'}}>
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
                        <Text style={{fontSize: 28, color: 'pink'}}>
                            Overview:
                        </Text>
                        <Text style={{fontSize: 20}}>
                            {movie.overview}
                        </Text>
                    </View>

                    <View>
                        {reviewsViews && <Text style={{fontSize: 28, marginTop: 16, marginLeft: 16, color: 'pink'}}>
                            Reviews:
                        </Text>}

                        {reviewsViews}

                    </View>
                </View>
            </ScrollView>
        )
    }
}