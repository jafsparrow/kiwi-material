import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import the product module.
// import { ProductsModule} from './products/products.module';

// this needs to import component which might be used across different side nav manus.
// eg when we add messages section.

// also import child modules to it, eg; products.module, distributor.module etc.
@NgModule({
  imports: [
    CommonModule,
    // ProductsModule
  ],
  declarations: [],
  // exports: [ProductsModule]
})
export class ContentModule { }
