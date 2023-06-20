// Importa los componentes necesarios
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa tus pantallas (aún no están definidas)
import MapScreen from './screens/MapScreen.js';
import PlaceScreen from './screens/PlaceScreen.js';
import PlacesListScreen from './screens/PlacesListScreen.js';
import InfoScreen from './screens/InfoScreen.js';
import QRCodeScreen from './screens/QRCodeScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';

// Crea el Stack Navigator
const Stack = createStackNavigator();

// Crea el Tab Navigator
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Places" component={PlacesListScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Place" component={PlaceScreen} />
        <Stack.Screen name="QRCode" component={QRCodeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}