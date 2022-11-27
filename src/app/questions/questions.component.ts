import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Question} from "./question";
import {AnswerOptionsSet} from "./answer-options-set";
import {LocationStrategy} from "@angular/common";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../user";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  answerOptionSet: AnswerOptionsSet[] = [];
  totalElements: number = 0;
  userId: number | undefined;
  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  private user: User | undefined;

  constructor(private userService: UserService,
              private locationSt: LocationStrategy,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showQuestions();
    this.preventBackButton();
    this.route.queryParams.subscribe((query: Params) => {
      this.userId = query['userId'];
    });
  }

  showQuestions(): void{
    let params: any = {};
    params['pageSize'] = 10;
    params['pageNumber'] = Math.floor(Math.random() * (3 + 1));
    params['sortType'] = 'description'

    this.userService.getQuestions(params)
      .subscribe(
        response => {
            this.questions = response['content']
            this.totalElements = response['totalElements']
            this.questions.forEach((question) => {
              question['givenAnswer'] = ''
            })
        }
      )
  }

  finishQuiz(): void{
    this.questions.forEach(question => {

      if (question.givenAnswer == question.correctAnswer.answerOption){
        this.correctAnswers++;
      }
      this.setUserScore();
    })
    this.router.navigate(["/scoreboard"])
  }

  private preventBackButton() {
    // @ts-ignore
    history.pushState(null, null, location.href);
    this.locationSt.onPopState(() => {
      // @ts-ignore
      return history.pushState(null, null, location.href);
    })
  }

  private setUserScore(): void {
    this.userService.updateUser(this.userId, this.correctAnswers)
      .subscribe(
      (response: User) => {
        this.user = response;
        console.log(this.user);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getUser(): void {
    this.userService.getUser(this.userId).subscribe(
      (response: User) => {
        this.user = response;
        this.user.score = this.correctAnswers;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }
}
