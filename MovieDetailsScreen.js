import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      {movie.image && <Image source={movie.image} style={styles.movieImage} />}
      <Text style={styles.movieTitle}>{movie.name}</Text>
      <Text style={styles.movieGenre}>{movie.genre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 16,
  },
  movieImage: {
    width: 300,
    height: 450,
    borderRadius: 8,
    marginBottom: 16,
  },
  movieTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieGenre: {
    color: 'white',
    fontSize: 18,
  },
});

export default MovieDetailsScreen;
