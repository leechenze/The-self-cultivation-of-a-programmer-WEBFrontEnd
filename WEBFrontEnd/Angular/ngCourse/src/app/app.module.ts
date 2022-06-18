import { NgModule } from '@angular/core';
/** 引入表单模块, 才可以使用双向数据绑定 */
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { ThreeComponentComponent } from './components/three-component/three-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { SearchTodoListComponent } from './components/search-todo-list/search-todo-list.component';
/** 引入并配置Service */
import { StorageService } from './services/storage.service';
import { DomComponentComponent } from './components/dom-component/dom-component.component';
import { CommunicationComponentComponent } from './components/communication-component/communication-component.component';
import { GoodsListComponent } from './components/goods-list-component/goods-list-component.component';
import { PersonalCenterComponent } from './components/personal-center-component/personal-center-component.component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { PersonalSettingComponent } from './components/personal-setting/personal-setting.component'




/** NgModule 装饰器 */
@NgModule({
  /** 项目组件声明 */
  declarations: [
    AppComponent,
    NewsComponent,
    ThreeComponentComponent,
    FormComponentComponent,
    SearchTodoListComponent,
    DomComponentComponent,
    CommunicationComponentComponent,
    GoodsListComponent,
    PersonalCenterComponent,
    PageNotFoundComponent,
    PersonalDetailComponent,
    PersonalSettingComponent
  ],
  /** 配置项目运行依赖 */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  /** 配置项目运行服务 */
  providers: [StorageService],
  /** 指定应用的主视图, 通过引导根appModule来启动应用默认加载的组件 */
  bootstrap: [AppComponent]
})
/** 根模块不需要到处任何东西, 因为其他组件不需要导入根模块 */
export class AppModule { }
