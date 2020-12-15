import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  Product: any = {
    "Id" : 1,
    "Name" : "Vila Marija",
    "Type": "House",
    "Price": 12000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
