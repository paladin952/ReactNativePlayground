import React from 'react'
import {StyleSheet, View, Image} from 'react-native';
import * as ApiService from "../services/api-service";
import SquareGrid from "react-native-square-grid";

export default class MainList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        ApiService.getMostPopular()
            .then(response => {
                // console.log("luci", response.data.results);
                console.log("luci", response.data.results[0]);
                let newData = response.data.results;
                newData.push(...newData);
                this.setState({
                    data: response.data.results || []
                });
            }).catch(err => {
            //TODO
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.state.data &&
                <SquareGrid
                    columns={2}
                    scrolling={true}
                    items={this.state.data}
                    renderItem={item =>
                        <View style={styles.item}>
                            <View style={styles.content}>
                                <Image
                                    style={{
                                        backgroundColor: '#ccc',
                                        flex: 1,
                                        resizeMode: 'cover',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                    }}
                                    source={{
                                        uri: "https://image.tmdb.org/t/p/w500/" + item.poster_path,
                                    }}
                                />
                            </View>
                        </View>
                    }
                />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
