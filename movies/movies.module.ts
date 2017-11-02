import { MovieNew } from "./movie-new.component";
import { MovieDetails } from "./movie-details.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MovieData } from "./movie.data";
import { MovieRatingComponent } from "./movie-rating.component";
import { MovieList } from "./movie-list.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: "list",
          component: MovieList
        },
        {
          path: "movies/details/:id",
          component: MovieDetails
        },
        {
          path: "movies/new",
          component: MovieNew
        }
      ],
      {
        useHash: true
      }
    )
  ],
  declarations: [MovieList, MovieRatingComponent, MovieDetails, MovieNew],
  providers: [MovieData]
})
export class MovieModule {}
