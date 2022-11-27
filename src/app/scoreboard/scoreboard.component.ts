import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Question} from "../questions/question";
import {User} from "../user";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  users: User[] = [];
  totalElements: number = 0;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers(): void{
    let params: any = {};
    params['pageSize'] = 8;
    params['pageNumber'] = 0;
    params['sortType'] = 'score'

    this.userService.getUsers(params)
      .subscribe(
        response => {
          this.users = response['content']
          this.totalElements = response['totalElements']
        }
      )
  }

}
