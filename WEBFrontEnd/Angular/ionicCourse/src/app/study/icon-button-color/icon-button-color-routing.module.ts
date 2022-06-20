import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconButtonColorPage } from './icon-button-color.page';

const routes: Routes = [
  {
    path: '',
    component: IconButtonColorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconButtonColorPageRoutingModule {}
