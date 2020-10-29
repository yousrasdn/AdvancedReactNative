import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';
import { FIREBASE_URL } from '../project-info';

const SignInForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = async () => {
        try {
            console.log(`sending`)
            let { data } = await axios.post(`${FIREBASE_URL}/verifyOneTimePassword`, { phone: phoneNumber, code });
console.log(`done`)
            firebase.auth().signInWithCustomToken(data.token);
            console.log(data)
        } catch (err) {
          console.log(err);
        }
    }

    return (
        <View style={{ display: 'flex' }}>
            <View style={{ marginBottom: 10 }}>
                <Input
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChangeText={phone => setPhoneNumber(phone)}
                />

                <Input
                    placeholder="Enter your code"
                    value={code}
                    onChangeText={code => setCode(code)}
                />
            </View>

            <Button onPress={handleSubmit} title="Submit" />

        </View>
    );

}

export default SignInForm;

const styles = StyleSheet.create({
 
});