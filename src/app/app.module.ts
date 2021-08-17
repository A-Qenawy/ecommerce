import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureSliderComponent } from './components/feature-slider/feature-slider.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ProductDetailsComponent } from './components/details/product-details/product-details.component';
import { EditComponent } from './components/edit/edit/edit.component';
import { DeleteComponent } from './components/delete/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add/add.component';
import { StatusComponent } from './components/prodcut-status/status/status.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FeatureSliderComponent,
    ProductGridComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailsComponent,
    EditComponent,
    DeleteComponent,
    AddComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public faCoffee = faCoffee;
 }
