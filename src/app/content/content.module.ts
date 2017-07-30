import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';
import { MaterialDesignModule } from '../material-design.module';

// import the product module.
import { ProductsModule} from './products/products.module';


// this needs to import component which might be used across different side nav manus.
// eg when we add messages section.
import { DashboardComponent } from './dashboard/dashboard.component';
// also import child modules to it, eg; products.module, distributor.module etc.
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialDesignModule,
    FormsModule,
    FlexLayoutModule,
    ProductsModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
      ProductsModule,
      DashboardComponent
      ]
})
export class ContentModule { }
