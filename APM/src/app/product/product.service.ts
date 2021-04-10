import { Injectable } from "@angular/core";
import { IProduct } from "./IProduct";

@Injectable({
    providedIn : 'root'
})
export class ProductService{
    products : IProduct[] =[
        {
            "productId" : 2,
            "productName" : "A",
            "productCode" : "3-Ab",
            "releaseDate" :"march 10 2021",
            "descriptipn" : "bla bla",
            "price" : 35,
            "startRating" : 4.2,
            "imageUrl" : "assets/images/garden_cart.png"
        },
        {
            "productId" : 3,
            "productName" : "Bb",
            "productCode" : "3-CD",
            "releaseDate" :"march 11 2021",
            "descriptipn" : "bla bla bla",
            "price" : 50,
            "startRating" : 3.8,
            "imageUrl" : "assets/images/hammer.png"
        }
    ];
GetProduct():IProduct[]{
    return this.products;
}
}