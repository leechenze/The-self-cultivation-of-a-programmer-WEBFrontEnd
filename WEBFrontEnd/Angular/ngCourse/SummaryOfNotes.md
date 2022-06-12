博学之, 审问之, 慎思之, 明辨之, 笃行之;
壹. 贰. 叁. 肆. 伍. 陆. 柒. 捌. 玖. 拾;





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
  
  