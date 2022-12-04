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
  
贰拾叁.环境遮挡贴图与强度(19.main.js);
  第一组uv控制的是颜色贴图,第二组uv控制的是光照效果;在基础材质下生效;
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: "#ffff00",
      map: texture,
      transparent: true,
      alphaMap: alphaTexture,
      opacity: 0.8,
      aoMap: aoTexture,
      aoMapIntensity: 0.9,
      side: THREE.DoubleSide,
    });
  aoMap需要第二组uv进行设置
    cubeGeometry.setAttribute(
      "uv2",
      new THREE.BufferAttribute(cubeGeometry.attributes.uv.array, 2)
    );
  
贰拾肆.详解PBR物理渲染;
  physically based rendering
  PBR基于物理渲染,之前的渲染是在模仿灯光的外观,PBR是模仿光的实际行为,使看起来更真实
  主要表现:
    灯光属性: 直接照明,间接照明,直接高光,间接高光,阴影,环境光闭塞
    表面属性: 基础设,法线,高光,粗糙度,金属度
  
贰拾伍.标准网络材质与光照物理效果(20.main.js);
  光照场景必须是由(标准材质呈现MeshStandardMaterial);
  环境光照(四面八方的打过来的光);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
  直线光照(设置位置来自[10,10,10]的光照)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

贰拾陆.置换贴图和顶点细分设置(21.main.js);
  导入置换贴图(与透明贴图同理,要求贴图黑白色,要凸出的部分呈白色,其他区域为黑色)
    let heightTexture = textureLoader.load("./textures/fruits2.png");
  创建几何体时还需设置segments参数(100,100,100),这样增加顶点才可达到效果
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 100, 100, 100);
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: "#ffff00",
      map: texture,
      transparent: true,
      alphaMap: alphaTexture,
      opacity: 0.8,
      aoMap: aoTexture,
      aoMapIntensity: 0.9,
      displacementMap: heightTexture,
      displacementScale: 0.08,
    });

贰拾柒.设置粗糙度与粗糙度贴图(22.main.js);
  导入粗糙贴图(与置换贴图同理); !!! fruits3图片不生效 !!!
    let roughnessTexture = textureLoader.load("./texture/fruits3.png");
  0表示镜面反射(更光滑更明显),1表示漫反射(光照更粗糙更模糊)
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: "#ffff00",
      map: texture,
      transparent: true,
      alphaMap: alphaTexture,
      opacity: 0.8,
      aoMap: aoTexture,
      aoMapIntensity: 0.9,
      displacementMap: heightTexture,
      displacementScale: 0.03,
      roughness: 1,
      roughnessMap: roughnessTexture,
    });

贰拾捌.设置金属度与金属度贴图(23.main.js);
  导入金属贴图()
    let metalnessTexture = textureLoader.load("./texture/fruits2.png");
  金属贴图会呈现黑色,在光照下才会显示
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: "#ffff00",
      map: texture,
      transparent: true,
      alphaMap: alphaTexture,
      opacity: 0.8,
      aoMap: aoTexture,
      aoMapIntensity: 0.9,
      displacementMap: heightTexture,
      displacementScale: 0.03,
      roughness: 1,
      roughnessMap: roughnessTexture,
      metalness: 1,
      metalnessMap: metalnessTexture,
    });

贰拾玖.法线贴图应用
  法线贴图没有制作,这里只是简单示例代码应用,同粗糙和金属贴图一致;
  罗列一些贴图资源地址：
    https://www.poliigon.com/
    https://www.arroway-textures.ch/
    https://3dtextures.me/
  导入法线贴图
    let normalTexture = textureLoader.load("./texture/fruits2.png");
  const cubeMaterial = new THREE.MeshStandardMaterial({
    color: "#ffff00",
    map: texture,
    transparent: true,
    alphaMap: alphaTexture,
    opacity: 0.8,
    aoMap: aoTexture,
    aoMapIntensity: 0.9,
    displacementMap: heightTexture,
    displacementScale: 0.03,
    roughness: 1,
    roughnessMap: roughnessTexture,
    metalness: 1,
    metalnessMap: metalnessTexture,
    normalMap: normalTexture,
  });

叁拾.纹理加载进度情况(24.main.js);
  设置事件集合
    let eventCollection = {
      onLoad: function () {
        console.log("图片加载完成");
      },
      onProgress: function (url, num, total) {
        loadDom.innerText = `当前加载进度${((num / total) * 100).toFixed(2)}%`;
      },
      onError: function (err) {
        console.log(err);
      },
    };
  方式一:
    设置加载管理器
      const loadingManager = new THREE.LoadingManager(
        eventCollection.onLoad,
        eventCollection.onProgress,
        eventCollection.onError
      );
    声明纹理加载器时传入加载管理器
      const textureLoader = new THREE.TextureLoader(loadingManager);
  方式二:
    let texture = textureLoader.load(
      "./textures/fruits.jpg"
        eventCollection.onLoad,
        eventCollection.onProgress,
        eventCollection.onError
    );

叁拾壹.详解环境纹理(25.main.js);
  px:  positive 正 X 轴
  nx:  negative 负 X 轴
  py:  positive 正 Y 轴
  ny:  negative 负 Y 轴
  pz:  positive 正 Z 轴
  nz:  negative 负 Z 轴
  设置Cube纹理加载器
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const environmentMapTexture = cubeTextureLoader.load([
      "textures/cube/Park3Med/px.jpg",
      "textures/cube/Park3Med/nx.jpg",
      "textures/cube/Park3Med/py.jpg",
      "textures/cube/Park3Med/ny.jpg",
      "textures/cube/Park3Med/pz.jpg",
      "textures/cube/Park3Med/nz.jpg",
    ]);
  创建球形物体
    const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.8,
      roughness: 0,
      envMap: environmentMapTexture,
    });
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);
  环境光照(四面八方的打过来的光);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
  直线光照
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

叁拾贰.经纬线映射贴图与HDR(26.main.js);
  HDR:高动态范围显示技术
    简单说就是.hdr后缀的文件包含了比较全面的光照信息,一个hdr文件即有白天状态下的场景,又有夜晚状态的场景
    用RGBELoader对hdr文件进行加载和处理
  导入RGBELoader
    import RGBELoader from "three/examples/jsm/loaders/RGBELoader";
  
    const rgbeLoader = new RGBELoader();
    rgbeLoader
      .loadAsync("textures/equirectangular/quarry_01_1k.hdr")
      .then((texture) => {
        // 纹理映射方法,声明球形投影映射效果;
        texture.mapping = THREE.EquirectangularReflectionMapping;
        // 添加场景背景
        scene.background = texture;
        // 给所有物体添加默认环境贴图,如果物体材质上有环境贴图那就用材质的贴图,如果没有就用场景贴图
        scene.environment = texture;
      });
  总结:
    cubeTextureLoader是分别定义正负xyz轴六个面进行映射
    dataTextureLoader是对一整张图片进行映射,一整张图展开后就是一个全景图;平面世界地图就是类似原理

叁拾叁.灯光与阴影的关系设置(27.main.js);
  条件及步骤:
    1.满足对光照响应的物体材质
    2.设置渲染器允许场景中的阴影贴图
      renderer.shadowMap.enabled = true;
    3.设置光照允许投射阴影
      directionalLight.castShadow = true;
    4.设置物体允许投射阴影
      sphereMesh.castShadow = true;
    5.设置平面允许接收阴影(创建一个平面,用来接收呈现的阴影)
      planeMesh.receiveShadow = true;
  
叁拾肆.平行关阴影属性与阴影相机原理(28.main.js);
  设置阴影模糊度
    directionalLight.shadow.radius = 30;
  设置阴影贴图分辨率
    directionalLight.shadow.mapSize.set(3456, 2234);
  设置平行光投射相机属性
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.top = 5;
    directionalLight.shadow.camera.bottom = -5;
    directionalLight.shadow.camera.left = -5;
    directionalLight.shadow.camera.right = 5;
  使用datGUI可视化查看参数变化
    const GUI = new dat.GUI();
    GUI.add(directionalLight.shadow.camera, "near")
      .min(0)
      .max(100)
      .step(0.1)
      .onChange(() => {
        更新相机投影矩阵
        directionalLight.shadow.camera.updateProjectionMatrix();
      });

叁拾伍.详解聚光灯各种属性与应用(29.main.js);
  P38 00:00

叁拾陆.

叁拾柒.

叁拾捌.

叁拾玖.

肆拾.
