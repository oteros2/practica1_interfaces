import { Http } from "./http/Http";
import { HttpError } from "./http/HttpError";

interface DataMovieRequest {
    total?: number;
    page?: number;
    route?: string;
}

export class FilmAdapter {
    static ROUTES = {
        popular: "/popular",
        now_playing: "/now_playing",
    };

    static async getFilm({ route = this.ROUTES.now_playing, page = 1 }: DataMovieRequest): Promise<MoviesResponse | HttpError> {
        const http = HttpFactory.build();
        if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.now_playing; {
            const movies = await http.getFilm(route, page);
            if (movies instanceof HttpError) return null;
            const dataMovies = resultMovieMapper(movies);
            return dataMovies;
        }
    }
}