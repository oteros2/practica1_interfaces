import { Movie } from "../entities/Movie";
import { Result } from "../responses/dataMovies";

export const movieMapper = (item : Result) : Movie => {
    return {
        id: item.id,
        title: item.title,
        poster: item.poster_path
    };
}

