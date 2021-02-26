import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Observable } from 'rxjs';
import { fetchdata } from 'src/app/models/fetchdata';

@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.component.html',
  providers: [FetchDataService],
  styleUrls: ['./searchdetail.component.scss']
})
export class SearchdetailComponent implements OnInit {
  detailArray: any;
  id: number;
  test_type: string;
  test_page: string;
  resultArray: any;
  search_temp1: any;
  token: string;
username:string;
type:string;
  constructor(private route: ActivatedRoute, private fetchdataservice: FetchDataService) {
   this.detail();

   this.searchData();
     }

  ngOnInit() {

  }

  detail() {
    this.route.params.subscribe(params => {
    this.id = params['i'];
    this.test_page = params['test_page'];
    this.test_type = params['test_type'];
    this.token = params['token'];
    this.username=params['username'];
    this.type=params['type'];
    });


    // console.log(this.id);
    // console.log(this.test_page);
    // console.log(this.test_type);
  }

  searchData() {
    console.log(this.token);
      let animals$: Observable<Array<fetchdata>> = this.fetchdataservice.getDataService(this.token, this.test_type, this.test_page);
      animals$.subscribe(animals => {
        this.search_temp1 = animals['animals'];
        // console.log(this.search_temp1[this.id].id);
      });
        


      
  }



}
