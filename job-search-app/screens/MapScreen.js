import React, { Component, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';

import * as actions from '../actions';

function MapScreen({fetchJobs, navigation }) {

    const [mapLoaded, setMapLoader] = useState(false);
    const [region, setRegion] = useState({
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    });

    useEffect(() => {
        setMapLoader(true);
    }, []);

    const onRegionChangeComplete = (region) => {
        setRegion(region);
    }

    const onButtonPress = () => {
      fetchJobs(region, () => {
       navigation.navigate('deck');
      });
    }
    
    if (!mapLoaded) {
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        );
    }

    return (<View style={{ flex: 1 }}>
        <MapView
          region={region}
          style={{ flex: 1 }}
          onRegionChangeComplete={onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={onButtonPress}
          />
        </View>
      </View>)
};


const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
}

export default connect(null, actions)(MapScreen);