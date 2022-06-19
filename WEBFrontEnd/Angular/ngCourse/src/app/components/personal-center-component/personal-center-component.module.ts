
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonalCenterComponent } from './personal-center-component.component';


const routes: Routes = [
  {
    path: '',
    component: PersonalCenterComponent
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
export class PersonalCenterComponentModule { }
