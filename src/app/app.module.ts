import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MdButtonModule, MdCheckboxModule, MdToolbarModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdGridListModule,
        MdInputModule,
        MdCardModule
    } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavbarComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
