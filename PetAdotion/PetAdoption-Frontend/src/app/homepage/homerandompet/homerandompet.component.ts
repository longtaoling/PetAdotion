import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homerandompet',
  templateUrl: './homerandompet.component.html',
  styleUrls: ['./homerandompet.component.scss']
})
export class HomerandompetComponent {
  images = [237, 1062, 169].map((n) => `https://picsum.photos/id/${n}/1600/900`);
 

  constructor() { }

  ngOnInit() {
  }

}
