import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductlistComponent } from './product/productlist.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './product/border-card.directive';
import { FilterByNamePipePipe } from './home/filter-by-name-pipe';
import { SortByPricePipe } from './home/sort-by-price.pipe';
import { DetailFigurineComponent } from './detail-figurine/detail-figurine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductlistComponent,
    BorderCardDirective,
    FilterByNamePipePipe,
    SortByPricePipe,
    DetailFigurineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
