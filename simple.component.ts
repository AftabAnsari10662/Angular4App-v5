import { Component } from "@angular/core";

@Component({
  selector: "simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})

export class SimpleComponent {
  message: string;
  constructor() {
    this.message = "Hello World!";
  }

  changeMessage() {
    this.message = "GoodBye!";
  }
}
