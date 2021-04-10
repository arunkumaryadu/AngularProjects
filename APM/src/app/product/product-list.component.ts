import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{     
    private myListFilter = ''; 
    private myProductService: ProductService;
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

    ngOnInit(): void {
        this.products = this.myProductService.GetProduct();
        this.filteredProducts = this.products;
    }

    OnRatingClicked(theMsg : string) : void{
        this.pageTitle = 'Product List:' + theMsg;
    }
}