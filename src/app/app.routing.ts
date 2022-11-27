import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {QuestionsComponent} from "./questions/questions.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ScoreboardComponent} from "./scoreboard/scoreboard.component";

const routes: Routes = [
  {path: "", component:RegistrationComponent},
  {path: "questions", component:QuestionsComponent},
  {path: "scoreboard", component:ScoreboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }

