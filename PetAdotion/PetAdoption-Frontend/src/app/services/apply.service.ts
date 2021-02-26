import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apply } from '../models/apply';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  URL: string;

  constructor(private http : HttpClient) {
    this.URL = "http://localhost:3000/applys";
   }
   getApplys(): Observable<Array<Apply>>{
     return this.http.get<Array<Apply>>(this.URL);
   }
   createApplys(apply: Apply): Observable<Apply>{
     return this.http.post<Apply>(this.URL, apply);
   }
   deleteApplys(apply: Apply): Observable<Apply>{
    return this.http.delete<Apply>(this.URL+"/"+apply.username);
  }
}
