  
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

function WelcomeScreen(props) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        (async function fetchToken() {
            let token = await AsyncStorage.getItem('fb_token');
            setToken(token);
            if (token) {
                props.navigation.navigate('main', {screen: 'MapScreen'});
                setToken(  token );
            } else {
                setToken(null);
            }
        })();
    }, []);

    onSlidesComplete = () => {
     props.navigation.navigate('auth');
    }


    if (_.isNull(token)) {
        return <AppLoading />;
    }

    return (
        <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />
    );
   
}

export default WelcomeScreen;