import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from "./IProduct";

@Injectable({
    providedIn : 'root'
})
export class ProductService{
    private myProductUrl = 'api/products/products.json';
    constructor(private theHttpClienr : HttpClient){}

    private HandleError(theError: HttpErrorResponse){
        let aErrorMessage='';
        if (theError.error instanceof ErrorEvent){
            aErrorMessage = `An error occured : ${theError.error.message}`;
        }
        else{
            aErrorMessage = `Server returned code : ${theError.status}, error message is: ${theError.message}`;
        }
        console.error(aErrorMessage);
        return throwError(aErrorMessage);
    }
    
GetProduct(): Observable<IProduct[]>{
    return this.theHttpClienr.get<IProduct[]>(this.myProductUrl).pipe(
        tap(theData => console.log('All', JSON.stringify(theData))),
        catchError(this.HandleError)
    );
}    
}