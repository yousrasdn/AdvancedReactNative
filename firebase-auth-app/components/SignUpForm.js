import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import { FIREBASE_URL } from '../project-info';

export default class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    try {
      await axios.post(`${FIREBASE_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${FIREBASE_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={{ display: 'flex' }}>
      
        <View style={{ marginBottom: 10 }}>
           <Input
                placeholder="Enter Phone Number"
                value={this.state.phone}
                onChangeText={phone => this.setState({ phone })}
           />
        </View>

        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});

 