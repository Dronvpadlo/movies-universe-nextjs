import {IMovieList} from "@/models/IMovieList";

export interface IMoviesResponse {
	page: number;
    results: IMovieList[]
	total_pages: number;
	total_results: number;
}