import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconButtonColorPageRoutingModule } from './icon-button-color-routing.module';

import { IconButtonColorPage } from './icon-button-color.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconButtonColorPageRoutingModule
  ],
  declarations: [IconButtonColorPage]
})
export class IconButtonColorPageModule {}
