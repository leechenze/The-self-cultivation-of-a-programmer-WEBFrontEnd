import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goods-list-component.component';
import { GoodsListService } from './goods-list-component.service';

const routes: Routes = [
  {
    path: '',
    component: GoodsListComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [GoodsListService]
})
export class GoodsListComponentModule { }
