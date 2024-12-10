import { IFilm } from "./Http";
import { HttpAxios } from "./HttpAxios";
import { HttpFetch } from "./HttpFetch";
import { Config } from "../../config/Config";

export class HttpFactory {
    static build() : IFilm {
        switch(Config.moviesAPI.type) {
            case "fetch":
                return new HttpFetch(Config.moviesAPI);
            case "axios":
                return new HttpAxios(Config.moviesAPI);
            default:
                return new HttpFetch(Config.moviesAPI);
        }
    }
}