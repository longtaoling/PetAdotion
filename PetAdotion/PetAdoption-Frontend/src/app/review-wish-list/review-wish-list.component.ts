import { Component, OnInit, Input } from '@angular/core';
import { WishService } from '../services/wish.service';
import { ActivatedRoute } from '@angular/router';
import { Wish } from '../models/wish';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review-wish-list',
  templateUrl: './review-wish-list.component.html',
  styleUrls: ['./review-wish-list.component.scss']
})
export class ReviewWishListComponent implements OnInit {

  @Input() wishs:Wish[];
  @Input() username:string;
@Input() type:string;
wishService:WishService
  // temp: any;

  constructor(private route: ActivatedRoute,wishService:WishService) { 
    this.route.params.subscribe(params => {
      this.type=params['type'];
      this.username=params['username'];
    }); 
      this.wishService=wishService;
      let wishs$: Observable<Array<Wish>> = this.wishService.getwishes();
      wishs$.subscribe(wishs=> {
        this.wishs= wishs;
      })
  }
  ngOnInit() {
  }
}
