import { resultMovieMapper } from "../config/mapper/resultMovieMapper";
import { HttpError } from "./http/HttpError";
import ResultMovie from "../config/entities/ResultMovie";
import { HttpFactory } from "./http/HttpFactory";

interface DataMovieRequest {
    total?: number;
    page?: number;
    route?: string;
}

export class FilmAdapter {
    static ROUTES = {
        popular: "/popular",
        nowPlaying: "/now_playing",
    };

    static async getMovies({route=this.ROUTES.nowPlaying, page=1, total}: DataMovieRequest): Promise<ResultMovie | null> {
        const http = HttpFactory.build();
        //if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
        const movies = await http.getFilm(route,page);
        if (movies instanceof HttpError) return null;
        const dataMovies = resultMovieMapper(movies);
        return dataMovies;
    }
}