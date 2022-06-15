import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件引入
import { GoodsListComponent } from './components/goods-list-component/goods-list-component.component';
import { PersonalCenterComponent } from './components/personal-center-component/personal-center-component.component'


// 配置路由列表
const routes: Routes = [
  {
    // path: 'goodsList/:id', // 定义路由名称
    path: 'goodsList', // 定义路由名称
    component: GoodsListComponent, // 指定显示的那个组件
  },
  {
    path: 'personalCenter', // 定义路由名称
    component: PersonalCenterComponent, // 指定显示的那个组件
  }
];

@NgModule({
  // forRoot() 方法会创建一个 NgModule，其中包含所有指令、给定的路由以及 Router 服务本身。
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
