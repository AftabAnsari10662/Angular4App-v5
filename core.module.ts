import { MovieModule } from "./movies/movies.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SimpleComponent } from "./simple.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MovieModule,
    RouterModule.forRoot(
      [
        {
          path: "simple",
          component: SimpleComponent
        }
      ],
      {
        useHash: true
      }
    )
  ],
  declarations: [SimpleComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
