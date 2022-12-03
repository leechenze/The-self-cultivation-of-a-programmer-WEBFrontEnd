博学之, 审问之, 慎思之, 明辨之, 笃行之;
壹. 贰. 叁. 肆. 伍. 陆. 柒. 捌. 玖. 拾;

壹.下载 ThreeJs 到本地 (ThreeSrcCode)
GitHub 地址: https://github.com/mrdoob/three.js/
Git 下载地址: git@github.com:mrdoob/three.js.git

主要目录
📁
docs/
📁
editor/
📁
examples/
等同于将官网宕到本地开启服务浏览
npm install
npm start

贰.使用 parcel 搭建环境
parcel 中文网: https://www.parceljs.cn/

cnpm install gsap dat.gui three parcel

安装说明:
gsap 动画库
dat.gui 图形用户界面库
parcel 打包工具
three 三维图形库

叁.渲染第一个场景和物体(01.main.js)
  引入THREE
    import * as THREE from "three";
  创建场景
    const scene = new THREE.Scene();
  透视相机
    const camera = new THREE.PerspectiveCamera(角度,宽高比,近端参,远端参);
  创建几何体
    const cubeGeometry = new THREE.BoxGeometry(width,height,depth);
  创建基础网格材质
    const cubeMaterial = new THREE.MeshBasicMaterial();
  创建物体
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  创建渲染器
    const renderer = new THREE.WebGLRenderer();

肆.轨道控制器查看物体(02.main.js);
  导入控制器
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  创建轨道控制器(添加控制器后就开启了操作事件交互);
    OrbitControls(camera, canvas);

伍.添加坐标轴辅助器(03.main.js);
  创建坐标轴(红色X,绿色Y,蓝色Z);
    AxesHelper(Size)

陆.设置物体移动(04.main.js)
  cube.position.set(3,0,0);
  cube.position.x = 3;
  
柒.设置物体缩放与旋转(05.mian.js);
  cube.scale.set(1, 1, 3);
  cube.scale.z = 3;
  (Math.PI == 180度)
  cube.rotation.set(Math.PI / 4, 0, 0, "XYZ");
  cube.rotation.x = Math.PI / 4;

捌.应用requestAnimationFrame(06.main.js);
  通过时间参数控制动画物体
    render(time);
  获取毫秒;
    let milliSec = time / 1000;
  给物体x轴赋值;
    cube.position.x = milliSec * 1;  

玖.通过clock跟踪时间处理动画(07.main.js);
  获取时钟运行总时长
    let time = clock.getElapsedTime();
    console.log(`时钟运行总时长为:${time}`);
  获取运行间隔时间(动画上一帧和下一帧的运行时差);
    let deltaTime = clock.getDelta();
    console.log(`获取运行时间间隔:${deltaTime}`);
  FPS计算
    两帧之差大概为0.008秒(8毫秒), 一秒 == 一千毫秒
    1000 / 8 就是一秒钟可以渲染多少帧(FPS计算);
      方法公式:
        console.log(1000 / (deltaTime * 1000));
        ===
        console.log(1 / deltaTime);
  
拾.GSAP动画库使用与原理(08.main.js);
  补间动画库
    docs: https://greensock.com/docs/
    npm:  https://www.npmjs.com/package/gsap
  gasp.to()
    https://greensock.com/docs/v3/GSAP/gsap.to()

拾壹.GSAP控制动画属性和方法(09.main.js);
  let posAnimate = gsap.to(cube.position, {
    x: 5,
    // 执行时间
    duration: 5,
    ease: "bounce.out",
    // 往返运动
    yoyo: true,
    // 重复运动次数
    repeat: 2,
    // 延迟运动
    delay: 2,
    onComplete: () => {
      console.log("动画完成");
    },
    onStart: () => {
      console.log("动画开始");
    },
  });
  window.addEventListener("dblclick", () => {
    if (posAnimate.isActive()) {
      posAnimate.pause();
    } else {
      posAnimate.resume();
    }
  });

拾贰.尺寸变化自适应(10.main.js);
  其他知识点:操作时设置阻尼效果,效果更真实;
    control.enableDemping = true;
  开启之后还要在渲染帧动画渲染前更新控制器
    control.update();
  监听窗口改变,重新渲染画布
  window.addEventListener("resize", () => {
    // 更新摄像头宽高比
    camera.aspect = window.innerWidth / window.innerHeight;
    // 更新摄像机的投影矩阵
    camera.updateProjectionMatrix();
    // 更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 设置渲染器像素比
    renderer.setPixelRatio(window.devicePixelRatio);
  });

拾叁.调用JS接口控制画布全屏和退出全屏(11.main.js);
  window.addEventListener("dblclick", () => {
    // 判断是否在全屏状态(返回全屏元素DOM);
    if (document.fullscreenElement) {
      // 在全屏状态时退出全屏
      document.exitFullscreen();
    } else {
      // 不再全屏状态时开启全屏
      renderer.domElement.requestFullscreen();
    }
  });

拾肆.应用图形用户界面更改变量(12.main.js)
  导入GUI库
    import * as dat from "dat.gui";
  创建GUI
    const GUI = new dat.GUI();
  添加位移属性控制
    GUI.add(cube.position, "x")
  添加文件夹
    let folder = GUI.addFolder("SetCube");
    folder.add(...);
    
拾伍.掌握几何体顶点_UV_法向属性
  解释:
    UV:
    法向:
    集合体顶点: 绘制一个物体所用的每个点都是顶点
  
拾陆.BufferGeometry设置顶点创建矩形(13.main.js)
  const cubeGeometry = new THREE.BufferGeometry();
  const vertices = new FLoat32Array([
    -1, -1, 1,
    1, -1, 1,
    1, 1, 1,
    1, 1, 1,
    -1, 1, 1,
    -1, -1, 1
  ])
  cubeGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
  const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
  scene.add(mesh);

拾柒.生成炫酷三角形科技物体(14.main.js);
  
  
  

拾捌.

拾玖.

贰拾.

贰拾壹.

贰拾贰.

贰拾叁.

贰拾肆.

贰拾伍.

贰拾陆.
