import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreens from '../screens/HomeScreens';
import DashboardScreen from '../screens/DashboardScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import WishlistScreen from '../screens/WishlistScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreens} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: true }} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ headerShown: true, title: 'Movie Details' }} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} options={{ headerShown: true, title: 'Wishlist' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
