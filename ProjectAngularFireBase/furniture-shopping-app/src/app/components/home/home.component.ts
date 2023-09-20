import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/interfaces/furniture.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  furnitures: Furniture[] = [
    {
      name: 'Rocking Chair',
      price: 150,
      photoUrl: 'assets/rockingchair.jpg',
    },
    {
      name: 'Dinner Table',
      price: 500,
      photoUrl: 'assets/dinnertable.jpg',
    },
    {
      name: 'Grey Bedroom',
      price: 2500,
      photoUrl: 'assets/bedroom.jpg',
    },
    {
      name: 'Sofa set',
      price: 1300,
      photoUrl: 'assets/sofaset.jpg',
    },
  ];

  constructor() {}
  addToCart(index: number) {
    console.log('item index', this.furnitures[index]);
  }
  ngOnInit() {
    console.log('test');
  }
}
