import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件引入
import { GoodsListComponent } from './components/goods-list-component/goods-list-component.component';
import { PersonalCenterComponent } from './components/personal-center-component/personal-center-component.component'
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component'
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component'
import { PersonalSettingComponent } from './components/personal-setting/personal-setting.component'


// 配置路由列表
const routes: Routes = [
  /** 静态路由 */
  {
    path: 'rxJs', // 定义路由名称
    loadChildren: () => import('./components/rx-js-component/rx-js-component.module').then(m => m.RxJsModule),
  },
  {
    // path: 'goodsList/:id', // 定义路由名称
    path: 'goodsList', // 定义路由名称
    // component: GoodsListComponent, // 指定显示的那个组件
    loadChildren: () => import('./components/goods-list-component/goods-list-component.module').then(m => m.GoodsListComponentModule),
  },
  {
    path: 'personalCenter', // 定义路由名称
    // component: PersonalCenterComponent, // 指定显示的那个组件
    loadChildren: () => import('./components/personal-center-component/personal-center-component.module').then(m => m.PersonalCenterComponentModule),
    // children: [
    //   {
    //     path: 'personalCenter/personalDetail',
    //     component: PersonalDetailComponent,
    //   },
    //   {
    //     path: 'personalCenter/personalSetting',
    //     component: PersonalSettingComponent,
    //   },
    //   /** 默认空路径路由 */
    //   {
    //     path: 'personalCenter',
    //     redirectTo: '/personalCenter/personalDetail',
    //     pathMatch: 'full'
    //   },
    // ]
  },
  /** 默认空路径路由 */
  {
    path: '',
    redirectTo: 'rxJs',
    pathMatch: 'full'
  },
  /** 通配符路由 */
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  // forRoot() 方法会创建一个 NgModule，其中包含所有指令、给定的路由以及 Router 服务本身。
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
