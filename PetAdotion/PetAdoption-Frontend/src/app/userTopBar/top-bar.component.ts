import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { fetchdata } from '../models/fetchdata';



@Component({
  selector: 'userTopBar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() test_type: string;
@Input() username:string;
@Input() type:string;
  constructor(private route:ActivatedRoute) { 
  this.route.params.subscribe(params => {
    this.username=params['username'];
    this.type=params['type'];
    });
  }
  ngOnInit() {
    this.test_type = '';
  }

  // searchData() {
  //   console.log(this.test_type);
  //   window.location.href="search/User/"+this.username+"/"+this.test_type;
  //   // this.token = this.fetchdataservice.getToken();
  //   // console.log(this.token);
  //   //   let animals$: Observable<Array<fetchdata>> = this.fetchdataservice.getDataService(this.token, this.test_type, this.test_page);
  //   //   animals$.subscribe(Array => {
  //   //     this.search_temp1 = Array['animals'];
  //   //   });

  //     // console.log(this.search_temp1);
  // }
}



