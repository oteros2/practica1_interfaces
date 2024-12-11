import { Image, StyleSheet, FlatList } from "react-native";
import { Movie } from "../config/entities/Movie";
import React from "react";

interface Movies {
  movies: Movie[];
  height: number;
  handleScroll: () => void;
  backgroundColor?: string;
}
  export default function Slider({ movies, height, handleScroll, backgroundColor }: Movies) {
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
        style={[styles.contenedor, { backgroundColor }]}
      />
    );
  }
  
  const styles = StyleSheet.create({
    contenedor: {
      height: 500,
    },
    imagen: {
      width: 300,
      margin: 2,
    },
  });