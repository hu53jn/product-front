import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
public productId!: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.params['id']);

    this.activatedRoute.params.subscribe(
      (params) => {
        this.productId = Number(params['id']);
      }
    )
  }

  onSelectNext(){
    this.productId += 1;
    this.router.navigate(['product-detail/', this.productId]);
  }

}
