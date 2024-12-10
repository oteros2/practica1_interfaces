import { MoviesResponse } from "../../config/responses/dataMovies";
import { HttpError } from "./HttpError";

interface Config{
    url_base: string;
    key: string;
}

export interface IFilm {
 getFilm(route : string, page : number): Promise<MoviesResponse | HttpError>;
}

export abstract class Http implements IFilm {
    protected url_base: string;
    protected key: string;

    constructor({url_base,key}: Config){
        this.url_base = url_base;
        this.key = key;
    }

abstract getFilm(route : string, page : number): Promise<MoviesResponse | HttpError>;
}
