import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from './../interfaces/token';
import { Observable } from 'rxjs';
import { fetchdata } from '../models/fetchdata';



@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  resultArray: any;
  tokens: Token[] = [
    
  ]; 
  resulttemp1: any = [];
  tokenfind: string = '';

  constructor(private http: HttpClient) {
  }

  getToken():Observable<Object>{
    let httpheaders1 = new HttpHeaders();
     httpheaders1.set('Content-Type', 'application/x-www-form-urlencoded');
    
    let options = {
      headers: httpheaders1
    };

 
      // .subscribe((response: any) => {
      //    this.tokens = response;
      // this.tokenfind = this.tokens["access_token"];
      // });
      // console.log(this.tokenfind);
      return    this.http.post(environment.api_TOKEN, 
        {
          grant_type: 'client_credentials',
          client_id: 'OVzoAY6qWh33N5EiB1XslIqjh1INwM86Dr8I8956OCiFjfat2E',
          client_secret: 'cE3Bo1oUgyPBZJe43II3thDYku06PJm6GvBZLurt'
        }, options);
  }

  getDataService(tokenfind1: string, test_type: string, test_page: string): Observable<Array<fetchdata>> {

      //getting data authorized by token
      let httpheaders = new HttpHeaders({
        'Authorization': 'Bearer' +' '+tokenfind1
      });
  
      var httpParams = new HttpParams()
          .set('type', test_type)
      .set('page', test_page);
  
      return this.http.get<Array<fetchdata>>(environment.api_URL,{ headers: httpheaders , params: httpParams})
  }

}
