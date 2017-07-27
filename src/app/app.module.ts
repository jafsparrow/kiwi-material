import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// importing http which are used in services
import { HttpModule } from '@angular/http';

// local modules.
// import { ContentModule } from './content/content.module';
import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-chartjs';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdGridListModule,
        MdInputModule,
        MdCardModule,
        MdProgressSpinnerModule,
        MdMenuModule,
        MdTableModule,
        MdTabsModule,
        MdSelectModule,
        MdDialogModule

    } from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ProductsComponent } from './content/products/products.component';
import { ContentComponent } from './content/content.component';
import { ProductcategoriesComponent } from './content/products/productcategories/productcategories.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
// auth service module.
import { AuthenticationService } from './auth/_services/authentication.service';
import { ProductService } from './models/products/product.service';
import { CategoryService } from './models/catogories/category.service';
import { AuthGuard } from './auth/_guard/auth.guard';
import { ProductaddComponent } from './content/products/productadd/productadd.component';
import { ProductlistComponent } from './content/products/productlist/productlist.component';
import { CategoryComponent } from './content/products/productcategories/category/category.component';
import { ProductViewComponent } from './content/products/product-view/product-view.component';
import { ProductEditComponent } from './content/products/product-edit/product-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavbarComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    ContentComponent,
    ProductcategoriesComponent,
    ProductaddComponent,
    ProductlistComponent,
    CategoryComponent,
    ProductViewComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // local modules.

    AppRoutingModule,
    // material desing modules
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdMenuModule,
    MdTableModule,
    MdTabsModule,
    MdSelectModule,
    MdDialogModule,
    // layout module
    FlexLayoutModule,
    BrowserAnimationsModule,
    // http module
    HttpModule,
    ChartModule,

  ],
  providers: [
    // auth service
    AuthenticationService,
    AuthGuard,
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
