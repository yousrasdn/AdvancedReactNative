  
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

const WelcomeScreen = ({navigation: { navigate }}) => {

    const onSlidesComplete = () => {
        navigate('auth');
    };

    return (<Slides
            data={SLIDE_DATA}
            onComplete={onSlidesComplete} 
        />
    );
};

export default WelcomeScreen;       