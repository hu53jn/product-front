import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  discount: number = 0;
  products: Array<IProduct> = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    if(this.activatedRoute.snapshot.url.toString()){
      this.discount = 1;
    }
    this.productService.getAllProducts(this.discount).subscribe(
      (data : any) => {
        this.products = data;
      }, (error: any) => {
        console.log(error);
      }
    );
  }

}
