import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepageindex',
  templateUrl: './homepageindex.component.html',
  styleUrls: ['./homepageindex.component.scss']
})
export class HomepageindexComponent implements OnInit {

  @Input() type:string;
  @Input() username:string;

  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.username=params['username'];
      });
  }


  ngOnInit() {
  }

}
