import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MainList from "./src/pages/main-list-page";

export default class App extends React.Component {
    render() {
        return (
            <MainList/>
        );
    }
}