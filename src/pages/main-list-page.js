import React from 'react'
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import * as ApiService from "../services/api-service";
import SquareGrid from "react-native-square-grid";
import * as Progress from 'react-native-progress';

export default class MainList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        ApiService.getMostPopular()
            .then(response => {
                let newData = response.data.results;
                newData.push(...newData);
                this.setState({
                    data: response.data.results || [],
                    loading: false
                });
            }).catch(err => {
            this.setState({
                loading: false
            });
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.state.loading
                        ? <Progress.Circle size={50} indeterminate={true} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
                        : this.state.data &&
                        <SquareGrid
                            columns={2}
                            scrolling={true}
                            items={this.state.data}
                            renderItem={item =>
                                <View style={styles.item}>
                                    <Image
                                        style={styles.image}
                                        source={{uri: "https://image.tmdb.org/t/p/w500/" + item.poster_path}}
                                    />
                                </View>
                            }
                        />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: '#ccc',
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        alignSelf: "stretch",
    },
    content: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
});
