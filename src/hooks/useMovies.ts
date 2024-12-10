import { useEffect, useState } from "react";
import ResultMovie from "../config/entities/ResultMovie";
import { FilmAdapter } from "../adapter/FilmAdapter";

export const useMovies = () => {

    const [nowPlaying, setNowPlaying] = useState<ResultMovie| null>(null);

    const [loading, setLoading] =useState(true);

    const loadMovies = async () => {
        const movies = await FilmAdapter.getMovies({...nowPlaying, route : FilmAdapter.ROUTES.nowPlaying});
        if (movies != null) {
            setNowPlaying(movies);
            setLoading(false);
        }
    }

    useEffect(() => {
      loadMovies();
    }, [])
    
    return {
        nowPlaying, loading
    }
}