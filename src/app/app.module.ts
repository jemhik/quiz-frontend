import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import { QuestionsComponent } from './questions/questions.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import {AppRouting} from "./app.routing";
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ScoreboardComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    AppRouting,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
