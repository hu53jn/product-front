import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../product/IProduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  // getAllProducts(): Observable<IProduct[]>{
  //   return this.httpClient.get('data/products.json').pipe(
  //     map( data => {
  //       const productsArray: Array<IProduct> = [];
  //       for(const id in data){
  //         if(data.hasOwnProperty(id)){
  //           productsArray.push(data[id]);
  //         }
  //       }
  //       return productsArray;
  //     })
  //   );
  // }

  getAllProducts(discount: number) {
    return this.httpClient.get('data/products.json');
  }

}
