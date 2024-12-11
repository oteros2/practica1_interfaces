import { View, ScrollView, Image, StyleSheet } from "react-native";
import { Movie } from "../config/entities/Movie";
import React from "react";

interface Movies {
    movies: Movie[];
    height: number;
    handleScroll: (event: any) => void;
  }
  
  export default function Slider({ movies, height, handleScroll }: Movies) {
    return (
      <View>
        <ScrollView style={styles.contenedor} horizontal={true} onScroll={handleScroll} scrollEventThrottle={16}>
        {movies.map((item, index) => (
          <Image
            style={[styles.imagen, { height }]}
            key={`${item.id}-${index}`}
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