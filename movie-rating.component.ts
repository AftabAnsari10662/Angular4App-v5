import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "./movie";

@Component({
  selector: "movie-rating",
  templateUrl: "./movie-rating.component.html"
})
export class MovieRatingComponent implements OnInit {
  @Input() movie: Movie;
  entries: string[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      if (i < this.movie.rating) {
        this.entries.push("glyphicon-star");
      } else {
        this.entries.push("glyphicon-star-empty");
      }
    }
  }
}
