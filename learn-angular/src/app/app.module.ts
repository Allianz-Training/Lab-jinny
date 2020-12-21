import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4ComponentComponent } from './lab4-component/lab4-component.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { TopbannerComponent } from './home/topbanner/topbanner.component';
import { CategoryMenuComponent } from './home/category-menu/category-menu.component';
import { SearchbarComponent } from './home/navbar/searchbar/searchbar.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { SwiffViewsComponent } from './swiff-views/swiff-views.component'

@NgModule({
 declarations: [AppComponent, HomeComponent, CountingComponent, Lab4ComponentComponent, NavbarComponent, TopbannerComponent, CategoryMenuComponent, SearchbarComponent, ToDoListComponentComponent, SwiffViewsComponent],
 imports: [BrowserModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {}
