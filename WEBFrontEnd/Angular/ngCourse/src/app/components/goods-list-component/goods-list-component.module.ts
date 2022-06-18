import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goods-list-component.component';

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
})
export class GoodsListComponentModule { }
