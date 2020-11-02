import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import store from './store';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
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
            options={{
              tabBarLabel: 'Main',
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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
      <Tab.Screen 
        name="review" 
        component={ReviewStack} 
        options={{
          tabBarLabel: 'Review',
        }}
     />         
    </Tab.Navigator>
  );
}


function ReviewStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='review' 
        component={ReviewScreen} 
        options={ ({navigation}) => ({
          headerRight: () => (
            <Button 
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
              title='Settings'
              onPress={() => navigation.navigate('settings')}
            />

          ),
          headerTitle: 'Review Jobs'
           
        })}
      />
      <Stack.Screen name='settings' component={SettingsScreen} />
    </Stack.Navigator> 
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
