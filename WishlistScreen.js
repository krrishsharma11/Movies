import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const WishlistScreen = ({ route }) => {
  const { likedMovies } = route.params;

  return (
    <View style={styles.container}>
      {likedMovies.length === 0 ? (
        <Text style={styles.noMoviesText}>No movies liked yet. Add movies to your wishlist!</Text>
      ) : (
        <FlatList
          data={likedMovies}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ImageBackground source={item.image} style={styles.movieCard}>
                <View style={styles.overlay}>
                  <Text style={styles.movieName}>{item.name}</Text>
                  <Text style={styles.movieGenre}>{item.genre}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  noMoviesText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  movieCard: {
    width: 150,
    height: 225,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    alignItems: 'center',
  },
  movieName: {
    color: 'white',
    fontSize: 18,
  },
  movieGenre: {
    color: 'white',
    fontSize: 16,
  },
});

export default WishlistScreen;
