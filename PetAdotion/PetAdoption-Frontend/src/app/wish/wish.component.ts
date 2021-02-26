import { Component, OnInit, Input } from '@angular/core';
import { WishService } from '../services/wish.service';
import { Wish } from '../models/wish';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})

export class WishComponent implements OnInit {
  @Input() Category: String;
  @Input() id:number;
  @Input() Breed: String;
  @Input() Color: String;
  @Input() Gendar: String;
  @Input() Age: String;
  @Input() SpecialR: String;
  @Input() type:string;
@Input() username:string;

  wishService: WishService;
  wish: Wish;
  constructor(wishService: WishService, private route:ActivatedRoute) { 
    this.wishService = wishService;
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.username=params['username'];
      });
  }

  ngOnInit() {
  }

  createwish(){
    this.wish = new Wish(this.username,this.Category, this.Breed, this.Color, this.Gendar, this.Age, this.SpecialR);
    this.wishService.writewish(this.wish).subscribe(wish => {
      this.wish = wish;
      alert("wish Successfully!");
    })
  }


}
