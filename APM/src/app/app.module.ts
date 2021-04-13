import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { CommonPipes } from './shared/common.pipes';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailsGuard } from './product/product-details.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CommonPipes,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'products', component: ProductListComponent},
      {
        path : 'products/:id',
        canActivate:[ProductDetailsGuard],
        component: ProductDetailComponent
      },
      {path : 'welcome', component: WelcomeComponent},
      {path : '', redirectTo: 'welcome' , pathMatch:'full'},
      {path : '**', redirectTo: 'welcome' , pathMatch:'full'},
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
