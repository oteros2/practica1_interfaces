import { Image, StyleSheet, FlatList } from "react-native";
import { Movie } from "../config/entities/Movie";
import React from "react";

interface Movies {
  movies: Movie[];
  height: number;
  width: number;
  handleScroll: () => void;
  backgroundColor?: string;
  orientation?: 'horizontal' | 'vertical';
}
export default function Slider({ movies, height, handleScroll, backgroundColor, orientation, width }: Movies) {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <Image
          style={[styles.imagen, { height, width }]}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster}`,
          }}
          resizeMode="stretch"
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal={orientation === 'horizontal'}
      onEndReached={handleScroll}
      onEndReachedThreshold={0.5}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      style={[styles.contenedor, { backgroundColor }]}
    />
  );
}

const styles = StyleSheet.create({
  contenedor: {
    height: '95%',
    width: '100%',
  },
  imagen: {
    margin: 5,
    borderRadius: 20,
  },
});