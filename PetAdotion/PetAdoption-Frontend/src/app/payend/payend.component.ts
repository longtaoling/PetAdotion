import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payend',
  templateUrl: './payend.component.html',
  styleUrls: ['./payend.component.scss']
})
export class PayendComponent implements OnInit {
  @Input() type:string;
  @Input() username:string

  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.username=params['username'];
      });
  }

  ngOnInit() {
  }

}
