import React, { Component, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';

import * as actions from '../actions';

function MapScreen() {

    const [mapLoaded, setMapLoader] = useState(false);
    const [region, setRegion] = useState({
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    });

    useEffect(() => {
        setMapLoader(true);
        // setRegion({
        //     longitude: -122,
        //     latitude: 37,
        //     longitudeDelta: 0.04,
        //     latitudeDelta: 0.09
        // });
    }, []);

    const onRegionChangeComplete = (region) => {
        setRegion({ region });
    }
    

    return ( <View style={{ flex: 1 }}>
        <MapView
          region={region}
          style={{ flex: 1 }}
          onRegionChangeComplete={onRegionChangeComplete}
        />
       
      </View>)
};

export default MapScreen;