import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './product/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('productList')
  productList: ProductListComponent;

  ngAfterViewInit(): void {
    this.productList.products = this.backendService.getProducts();
  }
  constructor(private backendService: BackendService) {}
}
