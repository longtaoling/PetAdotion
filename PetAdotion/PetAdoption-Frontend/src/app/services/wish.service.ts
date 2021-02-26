import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Wish} from "../models/wish";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  url: string;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3000/wishs";
  }

  getwishes():Observable<Array<Wish>> {
    return this.http.get<Array<Wish>>(this.url);
  }
  
  writewish(wish: Wish):Observable<Wish>{
    return this.http.post<Wish>(this.url, wish);
  }
}

