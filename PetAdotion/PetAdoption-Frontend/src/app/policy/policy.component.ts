import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
@Input() username:string;
@Input() type:string;
  constructor(
    private route: ActivatedRoute
  ) {  this.route.params.subscribe(params => {
    this.type=params['type'];
    this.username=params['username'];
    }); }
  ngOnInit() {
    this.getPolicy()
  }
  getPolicy(): void{
    const id = +this.route.snapshot.paramMap.get;
    console.log('')
  }

}
