博学之, 审问之, 慎思之, 明辨之, 笃行之;
零. 壹. 贰. 叁. 肆. 伍. 陆. 柒. 捌. 玖. 拾;


零.
  参考地址:
    https://juejin.cn/post/7033690420899135519  (基础)
    https://juejin.cn/post/7038851728300572702  (路由 & 表单)
    https://juejin.cn/post/7038926621574725646  (依赖注入 & RxJs)


壹.Angular环境搭建&创建项目
  安装全局@angular/cli环境;
    npm install -g @angular/cli
  创建项目
    ng new ngCourse
  跳过npm install安装
    ng new ngCourse --skip-install
  运行项目
    ng serve --open
  生成组件
    ng generate component component/news
    简写为
    ng g component component/news
  




贰.目录结构介绍&分析
  ngCourse
    E2e: 端对端测试文件
    node_modules: 配置文件的文件包
    .editorconfig: 编辑器的配置文件
    .gitignore: 使用git忽略你不需要的文件
    angular.json: angular配置文件
    package.json: 项目依赖配置
    README.md: 告知你运行的相关命令等
    tsConfig.json: typescript的配置文件
    tslint.json: tslint的配置文件

    src：
      app: 放置组件和跟模块
        app.component.ts                  
        app.component.html
        app.component.scss
        app.module.ts
          BrowserModule: 浏览器模块
          NgModule: angular 核心模块
          AppComponent : app核心组件
          @NgModule装饰器：
            @NgModule接受一个元数据对象，告诉angular如何编译和启动应用
          @NgModule里面的东西：
            Declarations: 配置当前项目需要运行的组件
            imports: 配置当前模块运行依赖的其他模块
            provides： 配置当前项目所需要的服务
            bootstrap： 制定应用的主视图，通过引导根组件AppModule来启动应用，这里一般写根组件
      assets: 静态资源文件
      environment.prod.ts: 环境相关的资源文件
      browserslist: 浏览器的配置文件
      index.html: 入口文件（在页面显示的其实是这个文件）
      karma.connfig.js: 端对端的测试文件
      main.ts : 整个项目的入口
      polyfills.ts: 填充库（angular6中使用socket.io报global is not definded错误时，在这个文件内加入(window as any）.global = window ; )
      styles.scss: 公共的scss样式
      test.ts: 测试的入口文件
      tsconfig.app.json: ts的配置文件
      tsconfig.spec.json: ts配置文件
      tslint.json: tslint配置文件









叁.组件&组件的模版合成(three-component)

  public        共有声明-默认  (可在类中使用,也可以在类外面使用)
  protected     保护类型声明  (只在当前类和其子类中可使用)
  private       私有声明  (只在当前类中可使用)
  
  Angular管道参考
    https://blog.csdn.net/liusuxilinyue/article/details/86680223?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165477140816782388087106%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165477140816782388087106&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-86680223-null-null.142^v11^pc_search_result_control_group,157^v13^new_style1&utm_term=angular+%E7%AE%A1%E9%81%93&spm=1018.2226.3001.4187
  






肆.表单(form-component)
伍.todoList(search-todo-list)
陆.Angular-Service&数据持久化(search-todo-list)
  服务生成命令 (生成一个storage的服务)
  ng generate service services/storage
  
柒.Angular-Dom&执行C3动画(dom-component)
  Angular中对DOM的操作可以使用原生JS操作, 也可以使用Angular内置的 @ViewChild 进行操作;
  
捌.组件通讯&生命周期(communication-component & app.component)










玖.路由(goods-list & personal-center & detail & setting & page-not-found)
  通配符路由(**) 
    可以匹配所有路由 当其他路由都没有匹配对的时候 Route会跳转指定的Component
  路由嵌套
    子路由和其它路由一样, 同时需要 path 和 component. 
    唯一的区别是你要把子路由放在父路由的 children 数组中
  路由懒加载
    你可以配置路由定义来实现惰性加载模块，这意味着 Angular只会在需要时才加载这些模块，而不是在应用启动时就加载全部
      1.先给之前的两个页面组件增加一个module文件，然后routes中使用loadChildren代替component进行配置
        loadChildren: () => import('./goods-list/goods-list.module')
                      .then(m => m.GoodListModule)
      2.在之前的两个页面组件中添加路由模块文件，添加一个指向该组件的路由。
        import { Routes, RouterModule } from '@angular/router';
        imports: [
          RouterModule.forChild(routes),
        ],
        exports: [RouterModule],
  路由守卫
    使用路由守卫来防止用户未经授权就导航到应用的某些部分,想了解更多请移步 
    路由守卫官网介绍  https://angular.cn/guide/router-tutorial-toh#milestone-5-route-guards
    用CanActivate来处理导航到某路由的情况。 // 进入路由的时候
    用CanActivateChild来处理导航到某子路由的情况。
    用CanDeactivate来处理从当前路由离开的情况. // 离开路由的时候
    用Resolve在路由激活之前获取路由数据。
    用CanLoad来处理异步导航到某特性模块的情况。CanActivate仍然会加载某个模块，canload不会去加载当不满足条件的情况下
      1.路由守卫应用
      export class TestGuard implements CanActivate {
        canActivate(
          next: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): boolean {
            //判断是否可以进入某个路由的逻辑
        }
      }
      2.路由配置声明
      {
        path: 'test-path',
        component: TestComponent,
        canActivate: [TestGuard], // 使用路由守卫guard
      }
  路由事件
    Router 在每次导航过程中都会通过 Router.events 属性发出导航事件.
    这些事件的范围贯穿从导航开始和结束之间的多个时间点
    https://angular.cn/guide/router-reference#router-events



拾.依赖注入(goods-list)

  为什么使用服务？
  组件不应该直接获取或保存数据, 它们应该聚焦于展示数据, 而把数据访问和处理的职责委托给某个服务.
  那面对组件和服务之间的关系, 该如何处理他们之间的依赖关系呢? Angular就引入了依赖注入框架去解决这件事情.
  
  依赖项( 服务/对象 )注入是一种设计模式，在这种设计模式中，类会从外部源请求依赖项而不是创建它们。Angular 的 DI 框架会在实例化某个类时为其提供依赖，从而提高模块性和灵活性。在学习依赖注入之前我们先来了解一下关于依赖注入中比较核心的三个概念：

    注入器（Injector）：提供了一系列的接口用于创建依赖对象的实例。

    Provider：用于配置注入器，注入器通过它来创建被依赖对象的实例。Provider把标识（Token）映射到列表对象，同时还提供了一个运行时所需的依赖，被依赖的对象就是通过该方法来创建的.

    依赖（Dependence）：指定了被依赖对象的类型，注入器会根据此类型创建对应的对象。


    Http的介绍
    大多数前端应用都要通过 HTTP 协议与服务器通讯，才能下载或上传数据并访问其它后端服务.
    Angular 给应用提供了一个 HTTP 客户端 API，也就是 @angular/common/http 中的 HttpClient 服务类。








    
拾壹.RxJs(request.service.ts & rx-js-component)

  什么是RxJS
  首先RxJS是一个库，是针对异步数据流编程工具，当然Angular引入RxJS就是让异步更加简单，更加可控，在开始RxJS之前，我们先来了解一下Reactive Programming，其本质就是使用流（stream）的一种编程方式

  什么是流呢？
  所谓流/stream，就是数据基于事件（event）变化的整体.
  stream = data + event，不过我们可以通过河流来更直观的理解一下流.
  首先河流是有流向的，所以流也是有流向的，一条河流可以分成很多支流，很多小的支流也可以汇总成一条河流.
  所以在RxJS中，流也可以使用操作符实现流的汇总和分流。

  RxJS中的核心概念 (Observable 、Observer 、Subscription、Subject)
  Observable: HttpClient Api 的约定类型
  
  RxJs 和 Promise的语法类似, 但是Rx比Promise功能强大很多, 
  比如可以中途撤回(unsubscribe), 多次执行, 提供多种工具函数(操作符)等

  RxJS的操作符（Operator）
  常见的运算符包含 map, filter, concat, flatmap, switchmap, forkjoin
  





  