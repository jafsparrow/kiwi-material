import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// importing http which are used in services
import { HttpModule } from '@angular/http';

// import { ChartModule } from 'angular2-chartjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

// local modules.
import { MaterialDesignModule } from './material-design.module';
import { ContentModule } from './content/content.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
// services and guards.
import { AuthenticationService } from './shared/services/authentication.service';
import { ProductService } from './shared/services/product.service';
import { CategoryService } from './shared/services/category.service';
import { AuthGuard } from './shared/guards/auth.guard';

// local components
import { AppComponent } from './app.component';
// ** shared.
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { SidenavbarComponent } from './shared/components/sidenavbar/sidenavbar.component';
// ** smart components
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './content/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavbarComponent,
    LoginComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialDesignModule,
    FormsModule,
    // local modules.
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    // http module
    HttpModule,
    ContentModule
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
