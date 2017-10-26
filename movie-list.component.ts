import { MovieData } from "./movie.data";
import { Injectable, Component } from "@angular/core";
import { Movie } from "./movie";

@Injectable()
@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html"
})
export class MovieList {
  movies: Movie[];
  constructor(private movieData: MovieData) {}

  ngOnInit() {
    this.movieData
      .getAllMovies()
      .subscribe((movies: Movie[]) => (this.movies = movies));
  }
}
