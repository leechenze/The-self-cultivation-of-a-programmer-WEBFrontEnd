import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** 引入表单模块, 才可以使用双向数据绑定 */
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { ThreeComponentComponent } from './components/three-component/three-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { SearchTodoListComponent } from './components/search-todo-list/search-todo-list.component';


/** 引入并配置Service */
import { StorageService } from './services/storage.service'




/** NgModule 装饰器 */
@NgModule({
  /** 配置项目组件 */
  declarations: [
    AppComponent,
    NewsComponent,
    ThreeComponentComponent,
    FormComponentComponent,
    SearchTodoListComponent
  ],
  /** 配置项目运行以来 */
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
