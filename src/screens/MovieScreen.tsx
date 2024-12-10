import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Slider from '../components/Slider';

type MovieScreenProps = {
    navigation: NavigationProp<ParamListBase>;
  };

const MovieScreen = ({navigation} : MovieScreenProps) => {
  return (
    <View>
      <Text>MovieScreen</Text>
      <Slider movies={[]} height={300} /> 
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default MovieScreen