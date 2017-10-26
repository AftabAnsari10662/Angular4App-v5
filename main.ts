import {NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { SimpleComponent } from "./simple.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SimpleComponent],
  providers: [],
  bootstrap: [SimpleComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
