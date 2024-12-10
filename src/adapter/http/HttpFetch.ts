import { MoviesResponse } from "../../config/responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";

export class HttpFetch extends Http {
    async getFilm(route: string, page: number): Promise<MoviesResponse | HttpError> {
        try {
            const data = await fetch(`${this.url_base}${route}?api_key=${this.key}&page=${page}`);
            const JsonData: MoviesResponse = await data.json();
            return JsonData;
        } catch (error) {
            return new HttpError(`${error}`);
        }
    }
}