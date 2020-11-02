import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

function AuthScreen(props) {
    useEffect(() => {
        props.facebookLogin();
        onAuthComplete(props);
    }, []);
   
    useEffect(() => {
       props.facebookLogin();
       onAuthComplete(props);
    }, [props.token]);



    const onAuthComplete = (props) => {
        if (props.token) {
             props.navigation.navigate('map', {screen: 'MapScreen'});
        }
    }

  
    return (
        <View />
    );
 
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);