import { Image, StyleSheet, FlatList } from "react-native";
import { Movie } from "../config/entities/Movie";
import React from "react";

interface Movies {
  movies: Movie[];
  height: number;
  handleScroll: () => void;
}
  export default function Slider({ movies, height, handleScroll }: Movies) {
    return (
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Image
            style={[styles.imagen, { height }]}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        onEndReached={handleScroll} 
        onEndReachedThreshold={0.5}
        style={styles.contenedor}
      />
    );
  }
  
  const styles = StyleSheet.create({
    contenedor: {
      height: 600,
    },
    imagen: {
      width: 300,
      margin: 5,
    },
  });