import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';



const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
            name="welcome" 
            component={WelcomeScreen} 
            options={{
              tabBarLabel: 'Home',
            }}
        />
        <Tab.Screen 
          name="auth" 
          component={AuthScreen} 
          options={{
            tabBarLabel: 'Auth',
          }}
        />
        <Tab.Screen 
          name="main" 
          component={MainTabNavigator} 
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
          name="map" 
          component={MapScreen} 
          options={{
            tabBarLabel: 'Map',
          }}
      />
      <Tab.Screen 
        name="deck" 
        component={DeckScreen} 
        options={{
          tabBarLabel: 'Deck',
        }}
      />
    </Tab.Navigator>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
