import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{     
    private myListFilter = ''; 
    pageTitle : string = 'Product list';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    filteredProducts: IProduct[] = [];
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

    get ListFilter() : string
    {
        return this.myListFilter;
    }

    set ListFilter(theFilterStr: string){
        this.myListFilter = theFilterStr;
        this.filteredProducts = this.PerformFilter(theFilterStr);
    }    

    PerformFilter(theFilterStr: string): IProduct[] {
        theFilterStr = theFilterStr.toLocaleLowerCase();
        return this.products.filter((theProducts: IProduct) => theProducts.productName.toLocaleLowerCase().includes(theFilterStr));
    }  

    toggleImages():void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.filteredProducts = this.products;
        console.log("ngOnInit");
    }

    OnRatingClicked(theMsg : string) : void{
        this.pageTitle = 'Product List:' + theMsg;
    }
}