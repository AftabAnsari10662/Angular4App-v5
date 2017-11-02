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
        }
      ],
      {
        useHash: true
      }
    )
  ],
  declarations: [MovieList, MovieRatingComponent],
  providers: [MovieData]
})
export class MovieModule {}
