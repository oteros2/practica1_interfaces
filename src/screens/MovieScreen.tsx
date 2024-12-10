import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';

type MovieScreenProps = {
    navigation: NavigationProp<any>;
  };

const MovieScreen = ({navigation} : MovieScreenProps) => {
  return (
    <View>
      <Text>MovieScreen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Movie')}
      />
    </View>
  )
}

export default MovieScreen