import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeroComponent} from "./hero/hero.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroService} from "./hero.service";
import {CaComponent} from "./caculator/ca.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    CaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    /*HeroService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
