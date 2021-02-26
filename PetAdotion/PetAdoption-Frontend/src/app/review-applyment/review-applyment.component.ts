import { Component, OnInit, Input } from '@angular/core';
import { Apply } from '../models/apply';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplyService } from '../services/apply.service';

@Component({
  selector: 'review-applyment',
  templateUrl: './review-applyment.component.html',
  styleUrls: ['./review-applyment.component.scss']
})
export class ReviewApplymentComponent implements OnInit {
  @Input() applys:Apply[];
  @Input() username:string;
@Input() type:string;
applyService:ApplyService
  // temp: any;

  constructor(private route: ActivatedRoute,applyService:ApplyService) { 
    this.route.params.subscribe(params => {
      this.type=params['type'];
      this.username=params['username'];
    }); 
      this.applyService=applyService;
      let applys$: Observable<Array<Apply>> = this.applyService.getApplys();
      applys$.subscribe(applys=> {
        this.applys= applys;
      })
  }
  ngOnInit() {

  }

}
