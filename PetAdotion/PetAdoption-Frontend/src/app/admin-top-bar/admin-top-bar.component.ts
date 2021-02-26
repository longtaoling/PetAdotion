import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.scss']
})
export class AdminTopBarComponent implements OnInit {
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

}
