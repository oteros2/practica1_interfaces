import axios from "axios";
import { Http } from "./Http";
import { HttpError } from "./HttpError";
import { MoviesResponse } from "../../config/responses/dataMovies";

export class HttpAxios extends Http{
    async getFilm(route: string, page: number): Promise<MoviesResponse | HttpError> {
        try {
            const {data} = await axios.get<MoviesResponse>(`${this.url_base}${route}?api_key=${this.key}&page=${page}`);
            return data;
        } catch (error) {
            return new HttpError(`${error}`);
        }
    }
}