import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { SimpleComponent } from "./simple.component";
import { MovieList } from "./movie-list.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MovieData } from "./movie.data";
import { MovieRatingComponent } from "./movie-rating.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: "simple",
          component: SimpleComponent
        },
        {
          path: "list",
          component: MovieList
        }
        // ,
        // {
        //   path: "**",
        //   component: MovieList
        // }
      ],
      {
        useHash: true
      }
    )
  ],
  declarations: [SimpleComponent, MovieList, AppComponent, MovieRatingComponent],
  providers: [MovieData],
  bootstrap: [AppComponent]
})
export class AppModule {}
