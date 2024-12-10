import { useEffect, useState } from "react";
import ResultMovie from "../config/entities/ResultMovie";
import { FilmAdapter } from "../adapter/FilmAdapter";

export const useMovies = () => {
    const [now_playing, setNowPlaying] = useState<ResultMovie | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const loadMovies = async () => {
        const movies = await FilmAdapter.getMovies({ ...now_playing, route: FilmAdapter.ROUTES.now_playing });
        if (movies != null) {
            setNowPlaying(movies);
            setLoading(true);
        }

        useEffect(() => {
            loadMovies();
        }, []);

        return { now_playing, loading };
    }
}