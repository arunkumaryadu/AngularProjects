import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './IProduct';

@Component({  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  myPageTitle :  string = "Product Details";
  myProduct : IProduct | undefined;
  constructor(private myRoute: ActivatedRoute, private myRouter : Router) { }

  ngOnInit(): void {
    const id = Number(this.myRoute.snapshot.paramMap.get('id'));
    this.myPageTitle += `: ${id}`;
  }

  OnBack(): void{
    this.myRouter.navigate(['/products']);
  }

}
