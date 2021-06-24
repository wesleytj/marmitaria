import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackagelunchComponent } from './packagelunch/packagelunch.component';
import { PackagelunchListComponent } from './packagelunch/packagelunch-list/packagelunch-list.component';
import { PackagelunchDetailsComponent } from './packagelunch/packagelunch-details/packagelunch-details.component';
import { PackagelunchItemComponent } from './packagelunch/packagelunch-list/packagelunch-item/packagelunch-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagelunchComponent,
    PackagelunchListComponent,
    PackagelunchDetailsComponent,
    PackagelunchItemComponent,
    FoodListComponent,
    FoodEditComponent,
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
