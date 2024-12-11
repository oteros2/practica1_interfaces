import { useEffect, useState } from "react";
import { FilmAdapter } from "../adapter/FilmAdapter";
import { Movie } from "../config/entities/Movie";


export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMovies = async () => {
    if (loading) return; 

    setLoading(true);
      const movies = await FilmAdapter.getMovies({route: FilmAdapter.ROUTES.nowPlaying,page,});
      if (movies && movies.movies) {
        setNowPlaying((prevMovies) => {
          const movieIds = new Set(prevMovies.map((movie) => movie.id));
          const newMovies = movies.movies.filter((movie) => !movieIds.has(movie.id));
          return [...prevMovies, ...newMovies];
        });
      }
      setLoading(false); 
    }

  const loadNextMovies = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1); 
    }
  };

  useEffect(() => {
    loadMovies(); 
  }, [page]);

  return {
    nowPlaying, loading, loadNextMovies,
  };
};