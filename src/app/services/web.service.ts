import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from '../movie';


@Injectable({
  providedIn: "root"
})
export class WebService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "https://valuefy-assignment-x.herokuapp.com/api/getVideos";
  }

  getMovieData() {
    return this.http.get<Movie[]>(this.url);
  }
}
