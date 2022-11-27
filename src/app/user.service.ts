import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {User} from "./user";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser(userId: number | undefined): Observable<User>{
    return this.http.get<User>(this.apiServerUrl + '/api/v1/user/'+userId)
  }

  public getUsers(params:any): Observable<any> {
    return this.http.get<any>(this.apiServerUrl +'/api/v1/user', {params});
  }

  public getQuestions(params:any): Observable<any> {
    return this.http.get<any>(this.apiServerUrl +'/api/v1/quiz', {params});
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiServerUrl +'/api/v1/user', user);
  }

  public updateUser(userId: number | undefined, score: number): Observable<User> {
    return this.http.put<User>(this.apiServerUrl +'/api/v1/user/'+ userId + "/" + score, score);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl +'/api/v1/user/'+userId);
  }
}
