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
        MdDialogModule,
        MdSlideToggleModule

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
        MdDialogModule,
        MdSlideToggleModule
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
        MdDialogModule,
        MdSlideToggleModule

  ]
})
export class MaterialDesignModule { }
