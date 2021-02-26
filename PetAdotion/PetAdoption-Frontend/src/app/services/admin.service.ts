import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

import {Admin} from "../models/admin";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminResource: string;
  adminResourceURL: string;
  adminUpdateURL:string;
  constructor(private http: HttpClient) {
    this.adminResource = 'admins';
    this.adminResourceURL = `${environment.serverBaseURL}/${this.adminResource}`;
  }
  getAdminPassword(username: string):Observable<Admin>{
    this.adminUpdateURL=`${environment.serverBaseURL}/${this.adminResource}/${username}`;
    return this.http.get<Admin>(this.adminUpdateURL);
  }
}
