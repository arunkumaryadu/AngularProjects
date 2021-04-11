import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{     
    private myListFilter = ''; 
    private myProductService: ProductService;
    myErrorMessage : string = '';
    mySub! : Subscription;
    pageTitle : string = 'Product list';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    filteredProducts: IProduct[] = [];
    products : IProduct[] = [];    
    
    constructor(private theProductService : ProductService){
        this.myProductService = theProductService;
    }
    
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

    OnRatingClicked(theMsg : string) : void{
        this.pageTitle = 'Product List:' + theMsg;
    }
    ngOnInit(): void {
        this.mySub = this.myProductService.GetProduct().subscribe({
            next : theProducts => {
                this.products = theProducts;
                this.filteredProducts = this.products;
            },
            error: theError => this.myErrorMessage = theError
        });
        
    }

    ngOnDestroy(): void {
        this.mySub.unsubscribe();
    }    
}