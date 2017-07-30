import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
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
        MdDialogModule

    } from '@angular/material';

@NgModule({
  imports: [
        CommonModule,
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
        MdDialogModule
  ],
  declarations: [],
  exports: [
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
        MdDialogModule

  ]
})
export class MaterialDesignModule { }
