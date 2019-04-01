/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDBr_oiPrPIvXuPfMR0j-mETS6KqlD1huQ',
            authDomain: 'auth-4f49b.firebaseapp.com',
            databaseURL: 'https://auth-4f49b.firebaseio.com',
            projectId: 'auth-4f49b',
            storageBucket: 'auth-4f49b.appspot.com',
            messagingSenderId: '854979955578'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Logged Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
