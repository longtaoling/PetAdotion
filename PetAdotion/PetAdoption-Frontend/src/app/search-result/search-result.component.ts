import { Component, OnInit, Input } from '@angular/core';
import { fetchdata } from '../models/fetchdata';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  providers: [FetchDataService],
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  test_type: string;
  test_page: string;
  resultArray: any;
  search_temp1: any;
  clicktemp: string;
  loding: false;
  counter: number;
  token: string;
@Input() username:string;
@Input() type:string;
constructor(private route:ActivatedRoute, private fetchdataservice: FetchDataService) { 
  this.test_page = '1';
this.route.params.subscribe(params => {
  this.username=params['username'];
  this.type=params['type'];
  this.test_type=params['test_type']
  });
  this.searchData();
}
ngOnInit() {
}
searchData() {
    this.fetchdataservice.getToken().subscribe(
      tokens => {
        this.token = tokens["access_token"];
        console.log(this.token);
      });
      
  setTimeout(()=>{  let animals$: Observable<Array<fetchdata>> = this.fetchdataservice.getDataService(this.token, this.test_type, this.test_page);
  animals$.subscribe(Array => {
    this.search_temp1 = Array['animals'];
  });},1000)

    
    // console.log(this.search_temp1);
}

clicktodo(i: string) {
  console.log(i);
  this.clicktemp = i;
}

changepage(k: string) {
 this.test_page = k;
 this.searchData(); 
}

}
