import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  myPageTitle :  string = "Product Details";
  errorMessage = '';
  product : IProduct | undefined;
  constructor(private myRoute: ActivatedRoute, private myRouter : Router,private productService: ProductService) { }

  ngOnInit(): void {
    const param = Number(this.myRoute.snapshot.paramMap.get('id'));
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  OnBack(): void{
    this.myRouter.navigate(['/products']);
  }

}
