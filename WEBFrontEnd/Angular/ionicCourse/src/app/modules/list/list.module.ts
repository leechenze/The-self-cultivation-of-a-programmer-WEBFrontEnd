import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 使用 ionic 内置组件必须引入 IonicModule 这个模块;
import { IonicModule } from '@ionic/angular';
import { ListComponent} from './list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ListComponent],
})
export class ListModule { }
