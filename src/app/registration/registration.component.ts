import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User | undefined;
  public users: User[] | undefined;
  constructor(private userService :UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(addForm: NgForm){
  this.userService.addUser(addForm.value).subscribe(
    (response: User) => {
      this.user = response;
      this.router.navigate(["/questions"],
        { queryParams: { userId: this.user.id } }
      );
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }
}
