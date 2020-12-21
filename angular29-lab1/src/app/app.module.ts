import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskComponent } from './task/task.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'productitem',
    component: ProductItemComponent,
  },
  {
    path: 'productlist',
    component: ProductListComponent,
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, ToDoListComponent, TaskComponent],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
