博学之, 审问之, 慎思之, 明辨之, 笃行之;
壹. 贰. 叁. 肆. 伍. 陆. 柒. 捌. 玖. 拾;





壹.Ionic环境搭建&创建项目

  Cordova 是⽤ Web 技术（ HTML，CSS 和 JS ）构建移动应⽤的平台。
  我们可以认为Cordova 是⼀个容器，⽤于将的 Web 应⽤移植到移动端，
  同时⽀持移动端的原生功能（例如：定位、蓝⽛、摄像头等).

  安装全局Ionic环境;
    npm install -g cordova ionic
  创建项目
    ionic start myAppName blank           空应用
    ionic start myAppName tabs            带有tabs的应用
    ionic start myAppName sidemenu        带有sidemenu的应用
  创建组件
    ng generate component component/header
  运行项目
    ionic serve



贰.目录结构&核心文件分析
  
  e2e                     端对端测试文件
  node_modules            项目依赖包
  resources               android/ios资源 (更换图标,启动动画)(ionic cordova resources -icon 后会生成)
  src                     
    test.ts               单元测试文件
    polyfills.ts          Angular需要的填充, 并在应用程序之前加载
  www                     静态目录, ionic build --prod 生成的单页面静态资源文件
  platforms               生成Android/Ios安装包需要的资源 (cordova platform add android 后会生成)
  plugins                 插件目录, 放置cordova安装的插件 (cordova plugin add xxx)
  config.xml              打包成app的配置文件 (ionic cordova resources -icon 后会生成)
  package.json
  ionic.config.json       ionic配置文件
  angular.json            angular配置文件
  karma.conf.js           测试相关的配置文件







叁.页面创建&跳转&自定义公共模块&数据渲染
  ionic generate page news                        新建news页面
  图标库地址:
    https://ionic.io/ionicons
  官网地址:
    https://ionicframework.com/
  ionic generate module modules/slide             新建slide模块
    
  自定义公共模块注意:
    declarations 声明对应组件
    exports 暴露对应组件
    在使用的页面中引入对应模块, selector 就是应用的标签名
  
  
  



肆.颜色&按钮&图标
  