import { Router } from '@angular/router';
import { MovieData } from "./movie.data";
import { Injectable, Component } from "@angular/core";
import { Movie } from "./movie";

@Injectable()
@Component({
  selector: "movie-list",
  templateUrl: "./movies/movie-list.component.html"
})
export class MovieList {
  movies: Movie[];
  constructor(
    private movieData: MovieData,
    private router:Router
  ) {}

  ngOnInit() {
    this.movieData
      .getAllMovies()
      .subscribe((movies: Movie[]) => (this.movies = movies));
  }

  upRating(movie: Movie) {
    movie.rating += 1;
  }

  downRating(movie: Movie) {
    movie.rating -= 1;
  }

  details(movie:Movie){
    this.router.navigate([`movies/details/${movie.movieId}`]);
  }
}
