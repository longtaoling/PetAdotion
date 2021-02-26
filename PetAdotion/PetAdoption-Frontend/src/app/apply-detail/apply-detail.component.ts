import { Component, OnInit, Input } from '@angular/core';
import { Apply } from '../models/apply';
import { ApplyService } from '../services/apply.service';

@Component({
  selector: 'app-apply-detail',
  templateUrl: './apply-detail.component.html',
  styleUrls: ['./apply-detail.component.scss']
})
export class ApplyDetailComponent implements OnInit {
@Input() apply:Apply;
applyService:ApplyService
  constructor(applyService:ApplyService) {
    this.applyService=applyService
   }

  ngOnInit() {
  }
agree(){
  this.applyService.deleteApplys(this.apply).subscribe(apply =>{
    alert("Agree successful");
     window.location.reload();
  })
}
reject(){
  this.applyService.deleteApplys(this.apply).subscribe(apply =>{
    alert("Reject successful");
     window.location.reload();
  })
}
}
