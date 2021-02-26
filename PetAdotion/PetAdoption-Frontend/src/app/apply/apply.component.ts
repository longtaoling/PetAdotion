import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplyService } from '../services/apply.service';
import { Apply } from '../models/apply';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() address: string;
  @Input() zip: string;
  @Input() city: string;
  @Input() state: string;
  @Input() type:string;
  @Input() username:string;
  @Input() checkpolicy:boolean;
  applyService: ApplyService;
  apply: Apply;


  constructor(applyService: ApplyService,private route:ActivatedRoute) {
    this.applyService = applyService;  
    this.route.params.subscribe(params => {
      this.username=params['type'];
      this.username=params['username'];
      });
  }

  ngOnInit() {
  }
  
  create(){
    if(this.checkpolicy==true){
      this.apply = new Apply(this.username,this.firstname, this.lastname, this.email, this.phone, this.address, this.zip, this.city, this.state);
      this.applyService.createApplys(this.apply).subscribe(apply => {
        this.apply = apply;
        alert("apply Successfully!");
      })
    }else{
      alert("Please check our policy carefully before adopting");  
  }
}
}
