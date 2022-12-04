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
  for (let i = 0; i < 50; i++) {
    const cubeGeometry = new THREE.BufferGeometry();
    // 创建顶点集合(传数字时表示长度为9的数组);
    const vertices = new Float32Array(9);
    for (let j = 0; j < 9; j++) {
      vertices[j] = Math.random() * 5 - 2.5;
    }
    // 设置顶点位置,规定每三个值作为一个顶点属性;
    cubeGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    // 创建基础网格材质
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(
        Math.random() * 5,
        Math.random() * 5,
        Math.random() * 5
      ),
      transparent: true,
      opacity: 0.6,
    });
    const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(mesh);
  }

拾捌.常用网格几何体
  详见官网示例演示:
    BoxGeometry
    CapsuleGeometry
    CircleGeometry
    ConeGeometry
    CylinderGeometry
    DodecahedronGeometry
    EdgesGeometry
    ExtrudeGeometry
    IcosahedronGeometry
    LatheGeometry
    OctahedronGeometry
    PlaneGeometry
    PolyhedronGeometry
    RingGeometry
    ShapeGeometry
    SphereGeometry
    TetrahedronGeometry
    TorusGeometry
    TorusKnotGeometry
    TubeGeometry
    WireframeGeometry
    ConvexGeometry
    DecalGeometry
    ParametricGeometry
    TextGeometry

拾玖.材质与纹理初探(15.main.js);
  导入纹理
    const textureLoader = new THREE.TextureLoader();
    let doorColorTexture = textureLoader.load("./textures/alphaMap.jpg");
  在材质中添加纹理
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: "#ffff00",
      map: doorColorTexture,
    });

贰拾.详解纹理偏移&旋转&重复(16.main.js);
  纹理偏移
    doorColorTexture.offset.x = 0.5;
    doorColorTexture.offset.y = 0.5;
  设置纹理旋转原点
    doorColorTexture.center.set(0.5, 0.5);
  纹理旋转
    doorColorTexture.rotation = Math.PI / 4;
  纹理重复
    doorColorTexture.repeat.set(2, 3);
  镜像重复
    doorColorTexture.wrapS = THREE.MirroredRepeatWrapping;
    doorColorTexture.wrapT = THREE.RepeatWrapping;
  

贰拾壹.设置纹理显示算法与mipmap(17.main.js);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: "#ffff00",
    map: texture,
  });

贰拾贰.透明材质和透明纹理(18.main.js);
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: "#ffff00",
    map: texture,
    transparent: true,
    alphaMap: alphaTexture,               黑白图片, 黑色部分不显示, 只现实白色部分;
    opacity: 0.8,                         透明度
    side: THREE.DoubleSide,               设置正面和背面都显示
  });
  OR: cubeMaterial.side = THREE.DoubleSide; 构造后的实例对象也可设值
  
贰拾叁.环境遮挡贴图与强度
  

贰拾肆.

贰拾伍.

贰拾陆.
