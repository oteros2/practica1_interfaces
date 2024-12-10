import ResultMovie from "../entities/ResultMovie";
import { MoviesResponse, Result } from "../responses/dataMovies";
import { movieMapper } from "./movieMapper";

export const resultMovieMapper = (result : MoviesResponse) : ResultMovie => {
    return {
        total : result.total_results,
        page : result.page,
        movies : result.results.map((item : Result) => movieMapper(item))
    };
}