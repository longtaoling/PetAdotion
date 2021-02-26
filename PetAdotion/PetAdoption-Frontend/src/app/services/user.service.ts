import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userResource: string;
  userResourceURL: string;
  userUpdateURL:string;
  constructor(private http: HttpClient) {
    this.userResource = 'users';
    this.userResourceURL = `${environment.serverBaseURL}/${this.userResource}`;
  }
  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.userResourceURL);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userResourceURL, user);
  }

  getUserPassword(username: string):Observable<User>{
    this.userUpdateURL=`${environment.serverBaseURL}/${this.userResource}/${username}`;
    return this.http.get<User>(this.userResourceURL);
  }

 updateUser(user:User):Observable<User>{
   this.userUpdateURL=`${environment.serverBaseURL}/${this.userResource}/${user.username}`;
   return this.http.put<User>(this.userResourceURL,user);
}
}
