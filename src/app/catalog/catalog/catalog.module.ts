import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { CatalogSearchComponent } from './components/catalog-page/pages/catalog-search/catalog-search.component';
import { GridComponent } from './components/catalog-page/pages/grid/grid.component';
import { FiltersComponent } from './components/catalog-page/pages/filters/filters.component';



@NgModule({
  declarations: [CatalogPageComponent, CatalogSearchComponent, GridComponent, FiltersComponent],
  exports: [
    CatalogPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
