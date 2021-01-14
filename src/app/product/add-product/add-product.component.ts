import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('form') addProduct!: NgForm;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackPressed(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("hello");
    console.log(this.addProduct);
  }

}
