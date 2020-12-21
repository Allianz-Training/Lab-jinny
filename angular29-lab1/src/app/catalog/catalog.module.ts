import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product/product-item/product-item.component';
import { PanelComponent } from '../panel/panel.component';
import { ProductListComponent } from '../product/product-list/product-list.component';

@NgModule({
  declarations: [PanelComponent, ProductItemComponent, ProductListComponent],
  imports: [CommonModule],
  exports: [PanelComponent, ProductItemComponent, ProductListComponent],
})
export class CatalogModule {}
