import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Movie } from "../../movie";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.css"]
})
export class PlaylistComponent implements OnInit {
  @Input("movies") movies: Movie[] = [];
  @Output() selectMovie = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  movieClicked(movie) {
    this.selectMovie.emit(movie);
  }
  
}
