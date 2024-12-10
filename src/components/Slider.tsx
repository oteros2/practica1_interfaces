import { View, ScrollView, Pressable, Image, Text, StyleSheet } from "react-native";
import { Movie } from "../config/entities/Movie";
import React from "react";

interface Movies {
    movies: Movie[];
    height: number;
  }
  
  export default function Slider({ movies, height }: Movies) {
    return (
      <View>
        <ScrollView style={styles.contenedor} horizontal={true}>
        {movies.map((item) => (
          <Image
            style={[styles.imagen, { height }]}
            key={item.id}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        ))}
      </ScrollView>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    contenedor: {
      height: 600,
    }, 
    imagen: {
      width: 300,
      margin: 1
    }
  })