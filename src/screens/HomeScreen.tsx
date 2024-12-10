import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Movie Page"
        onPress={() => navigation.navigate('Movie')}
      />
    </View>
  )
}

export default HomeScreen