import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';

const moviesData = [
  { id: '1', name: 'AVENGERS', genre: 'Thriller', image: require('../assets/thriller1.jpeg') },
  { id: '2', name: 'ANNABELLA', genre: 'Horror', image: require('../assets/horror1.jpeg') },
  { id: '3', name: 'TOM CRUISE', genre: 'Adventure', image: require('../assets/adventure1.jpeg') },
  { id: '4', name: 'FAST X', genre: 'Action', image: require('../assets/action1.jpeg') },
  { id: '5', name: 'FALL', genre: 'Thriller', image: require('../assets/thriller2.jpeg') },
  { id: '6', name: 'BLOODY HAND', genre: 'Horror', image: require('../assets/horror2.jpeg') },
  { id: '7', name: 'JUMANJI', genre: 'Adventure', image: require('../assets/adventure2.jpeg') },
  { id: '8', name: 'IMPOSSIBLE', genre: 'Action', image: require('../assets/action2.jpeg') },
  { id: '9', name: 'TAROT', genre: 'Thriller', image: require('../assets/thriller3.jpeg') },
  { id: '10', name: 'JOKER', genre: 'Horror', image: require('../assets/horror3.jpeg') },
  { id: '11', name: 'RAMPAGE', genre: 'Adventure', image: require('../assets/adventure3.jpeg') },
  { id: '12', name: 'THE COVENANT', genre: 'Action', image: require('../assets/action3.jpeg') },
  { id: '13', name: 'TRAP', genre: 'Thriller', image: require('../assets/thriller4.jpeg') },
  { id: '14', name: 'READY OR NOT', genre: 'Horror', image: require('../assets/horror4.jpeg') }, 
  { id: '15', name: 'ARCHER', genre: 'Adventure', image: require('../assets/adventure4.jpeg') },
  { id: '16', name: 'THE DEVIL', genre: 'Action', image: require('../assets/action4.jpeg') },
  { id: '17', name: 'JOHN2WICK', genre: 'Thriller', image: require('../assets/thriller5.jpeg') },
  { id: '18', name: 'WINNIE THE POOH', genre: 'Horror', image: require('../assets/horror5.jpeg') }, 
  { id: '19', name: 'DOLITTLE', genre: 'Adventure', image: require('../assets/adventure5.jpeg') }, 
  { id: '20', name: 'FIGHTER', genre: 'Action', image: require('../assets/action5.jpeg') }, 
]; 

const genres = ['Thriller', 'Horror', 'Adventure', 'Action'];

const HomeScreens = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState(moviesData);
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const toggleLike = (movie) => {
    if (likedMovies.find(m => m.id === movie.id)) {
      setLikedMovies(likedMovies.filter(m => m.id !== movie.id));
    } else {
      setLikedMovies([...likedMovies, movie]);
    }
  };

  const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <ImageBackground source={require('../assets/background.jpeg')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.headerButton}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.headerButton}>Home Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist', { likedMovies })}>
            <Text style={styles.headerButton}>Liked</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Movies..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <ScrollView>
          {genres.map((genre) => (
            <View key={genre}>
              <Text style={styles.genreTitle}>{genre}</Text>
              <FlatList
                data={filteredMovies.filter(movie => movie.genre === genre)}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
                    <ImageBackground source={item.image} style={styles.movieCard}>
                      <View style={styles.overlay}>
                        <Text style={styles.movieName}>{item.name}</Text>
                        <TouchableOpacity onPress={() => toggleLike(item)}>
                          <AntDesign
                            name={likedMovies.find(m => m.id === item.id) ? 'heart' : 'hearto'}
                            size={24}
                            color={likedMovies.find(m => m.id === item.id) ? 'red' : 'white'}
                          />
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerButton: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight:'bold'
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  genreTitle: {
    color: 'white',
    fontSize: 22,
    marginLeft: 16,
    marginTop: 16,
    fontWeight:'bold',
    
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
    fontWeight:'bold'
  },
});

export default HomeScreens;
