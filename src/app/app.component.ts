import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WebService } from "./services/web.service";
import { Movie } from "./movie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private webService: WebService) {}

  movies: Movie[] = [];
  selectedMovie: Movie = null;
  err: boolean = false;
  ngOnInit() {
    this.webService.getMovieData().subscribe(
      res => {
        this.movies = res;
        this.selectedMovie = this.movies[0];
      },
      err => {
        console.log(err);
        this.err = true;
      }
    );
  }

  changeSelectedMovie(event) {
    this.selectedMovie = event;
  }
}
