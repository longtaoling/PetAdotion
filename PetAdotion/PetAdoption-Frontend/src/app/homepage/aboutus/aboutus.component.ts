import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  @Input() type:string;
  @Input() username:string;

  constructor(){

  }
  ngOnInit() {
  }

  goto(){
    window.location.href = "/donate/User/"+this.username;

  }
}         
