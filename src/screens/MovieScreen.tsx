import { View,Button } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Slider from '../components/Slider';
import { useMovies } from '../hooks/useMovies';

type MovieScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const MovieScreen = ({ navigation }: MovieScreenProps) => {
  const { nowPlaying, loading, loadNextMovies } = useMovies();

  const handleScroll = (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width >= contentSize.width - 20;

      if (isEndReached && !loading) {
        loadNextMovies();
      }
  }

    return (
      <View>
        <Slider movies={nowPlaying} height={300} handleScroll={handleScroll}/>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    )
  }

export default MovieScreen