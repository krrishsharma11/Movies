import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const genres = [
  'Thriller', 'Horror', 'Adventure', 'Comedy',  'Hollywood', 'Action', 
];

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {genres.map((genre, index) => (
        <TouchableOpacity
          key={index}
          style={styles.genreCard}
          onPress={() => navigation.navigate('Home', { genre })}
        >
          <Text style={styles.genreText}>{genre}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeButtonText}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
    marginTop:12
  },
  genreCard: {
    backgroundColor: '#444',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  genreText: {
    color: 'white',
    fontSize: 18,
  },
  homeButton: {
    backgroundColor: '#6200ea',
    padding: 16,
    margin: 80,
    borderRadius: 8,
    width: 150,
    height:55,
    alignItems: 'center',
  },
  homeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DashboardScreen;
