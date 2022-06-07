博学之, 审问之, 慎思之, 明辨之, 笃行之;
壹. 贰. 叁. 肆. 伍. 陆. 柒. 捌. 玖. 拾;





壹.Ionic环境搭建&创建项目
  安装全局Ionic环境;
    npm install -g cordova ionic
  创建项目
    ionic start myAppName blank           空应用
    ionic start myAppName tabs            带有tabs的应用
    ionic start myAppName sidemenu        带有sidemenu的应用
  运行项目
    ionic serve



贰.目录结构&核心文件分析
  
  e2e                     端对端测试文件
  node_modules            项目依赖包
  resources               android/ios资源 (更换图标,启动动画);
  src                     
    test.ts               单元测试文件
    polyfills.ts          Angular需要的填充, 并在应用程序之前加载
  www                     静态目录, ionic build --prod 生成的单页面静态资源文件
  platforms               生成Android/Ios安装包需要的资源 (cordova platform add android 后会生成)
  plugins                 插件目录, 放置cordova安装的插件
  config.xml              打包成app的配置文件
  package.json
  ionic.config.json       ionic配置文件
  angular.json            angular配置文件
  karma.conf.js           测试相关的配置文件

