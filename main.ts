import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { SimpleComponent } from "./simple.component";
import { MovieList } from "./movie-list.component";
import { HttpClientModule } from "@angular/common/http";

import { MovieData } from "./movie.data";
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [SimpleComponent, MovieList],
  providers: [MovieData],
  bootstrap: [SimpleComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
