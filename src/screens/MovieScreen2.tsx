import { View, Button } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

type MovieScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const MovieScreen = ({ navigation }: MovieScreenProps) => {
  const { nowPlaying, loadNextMovies } = useMovies();

  return (
    <View>
      <Slider
        movies={nowPlaying}
        height={500}
        width={300}
        handleScroll={loadNextMovies}
        backgroundColor='black'
        orientation='horizontal'
      />
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default MovieScreen