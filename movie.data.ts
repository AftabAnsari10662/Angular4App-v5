import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MovieData {
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get("http://moviestorecore.azurewebsites.net/api/movies");
  }
}
