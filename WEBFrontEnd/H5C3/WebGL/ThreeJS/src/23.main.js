import * as THREE from "three";
// 导入控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 导入GSAP动画库
import gsap from "gsap";
// 导入GUI图形操作库
import * as dat from "dat.gui";

/**
 * 1.创建场景
 */
const scene = new THREE.Scene();

/**
 * 2.创建相机
 */
// 创建透视相机; (角度, 宽高比,近端参, 远端参;)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 设置相机位置; (x,y,z);
camera.position.set(0, 0, 10);
// 把相机添加到场景中
scene.add(camera);

/**
 * 3.场景中添加物体
 */
const textureLoader = new THREE.TextureLoader();
// 导入纹理贴图
let texture = textureLoader.load("./textures/fruits.jpg");
// 导入透明贴图
let alphaTexture = textureLoader.load("./textures/grid1.png");
// 导入环境贴图
let aoTexture = textureLoader.load("./textures/grid2.png");
// 导入置换贴图
let heightTexture = textureLoader.load("./textures/fruits2.png");
// 导入粗糙贴图
let roughnessTexture = textureLoader.load("./texture/fruits3.png");
// 导入金属贴图
let metalnessTexture = textureLoader.load("./texture/fruits2.png");

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
  displacementScale: 0.03,
  roughness: 1,
  roughnessMap: roughnessTexture,
  metalness: 1,
  metalnessMap: metalnessTexture,
});
// aoMap需要第二组uv进行设置
cubeGeometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(cubeGeometry.attributes.uv.array, 2)
);
cubeMaterial.side = THREE.DoubleSide;
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

/**
 * 添加光照场景
 */
// 环境光照(四面八方的打过来的光);
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
// scene.add(ambientLight);
// 直线光照
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

/**
 * 4.初始化渲染器
 */
// 创建渲染器;
const renderer = new THREE.WebGLRenderer();
// 设置渲染尺寸大小; (画布宽, 画布高);
renderer.setSize(window.innerWidth, window.innerHeight);
// 将webgl渲染的canvas内容添加到body元素上
document.body.appendChild(renderer.domElement);

/**
 * 5.创建控制器
 */
// 创建轨道控制器; (相机,渲染器Canvas);
const control = new OrbitControls(camera, renderer.domElement);
// 设置阻尼感,操作效果更真实;
control.enableDamping = true;

// 最后使用渲染器,通过相机将场景渲染进来
renderer.render(scene, camera);

/**
 * 添加坐标轴辅助器
 */
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

/**
 * 封装渲染函数
 */
function render() {
  control.update();
  renderer.render(scene, camera);
  // 渲染下一帧时递归调用rander函数;
  requestAnimationFrame(render);
}
render();

/**
 * 监听窗口改变,重新渲染画布
 */
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

/**
 * 双击控制全屏模式
 */
window.addEventListener("contextmenu", () => {
  // 判断是否在全屏状态(返回全屏元素DOM);
  if (document.fullscreenElement) {
    // 在全屏状态时退出全屏
    document.exitFullscreen();
  } else {
    // 不再全屏状态时开启全屏
    renderer.domElement.requestFullscreen();
  }
});
