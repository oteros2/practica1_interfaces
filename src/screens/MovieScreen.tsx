import { View, Text, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Slider from '../components/Slider';
import { useMovies } from '../hooks/useMovies';

type MovieScreenProps = {
    navigation: NavigationProp<ParamListBase>;
  };

const MovieScreen = ({navigation} : MovieScreenProps) => {
  const { nowPlaying, loading } = useMovies();

   if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text>MovieScreen</Text>
      {nowPlaying && <Slider movies={nowPlaying.movies} height={500} /> }
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default MovieScreen