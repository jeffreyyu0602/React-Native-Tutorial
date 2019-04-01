/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const viewStyle = {
    backgroundColor: '#FFF',
    flex: 1
};

const App = () => (
    <View style={viewStyle}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
