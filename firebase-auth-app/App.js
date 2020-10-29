import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

import { FIREBASE_CONFIG } from './project-info';

export default function App() {

  useEffect(() => {
    firebase.initializeApp(FIREBASE_CONFIG);
  }, []);

  return (
    <View style={styles.container}>
      <SignInForm/>
      <SignUpForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
});
