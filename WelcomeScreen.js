import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/newbackground.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to World Cinema</Text>
        <Text style={styles.createdBy}>Created by [𝒦𝓇𝓇𝒾𝓈𝒽 ❥𝕊𝕙𝕒𝕣͢͢͢𝕞𝕒]</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  welcomeText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  createdBy: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
