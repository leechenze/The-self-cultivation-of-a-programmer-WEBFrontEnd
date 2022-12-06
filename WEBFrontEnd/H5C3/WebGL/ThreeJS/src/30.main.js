import * as THREE from "three";
// 导入控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 导入GSAP动画库
import gsap from "gsap";
// 导入GUI图形操作库
import * as dat from "dat.gui";
// 导入RGBELoader
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { DoubleSide, UnsignedInt248Type } from "three";

/**
 * 1.创建场景
 */
const scene = new THREE.Scene();

/**
 * 2.创建相机
 */
// 创建透视相机; (角度, 宽高比,近端参, 远端参;)
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 设置相机位置; (x,y,z);
camera.position.set(0, 5, 8);
// 把相机添加到场景中
scene.add(camera);

/**
 * 3.场景中添加物体
 */
// 创建球形物体
const sphereGeometry = new THREE.SphereGeometry(1, 100, 100);
const sphereMaterial = new THREE.MeshStandardMaterial();
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
// 设置物体允许投射阴影
sphereMesh.castShadow = true;
scene.add(sphereMesh);
// 创建平面(用来接收呈现的阴影)
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshStandardMaterial({
  side: THREE.DoubleSide,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.position.y = -1;
planeMesh.rotation.x = Math.PI / 2;
// 设置平面允许接收阴影
planeMesh.receiveShadow = true;
scene.add(planeMesh);

/**
 * 添加光照场景
 */
// 环境光照(四面八方的打过来的光);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);
// 点光照
const pointLight = new THREE.PointLight(0xff0000, 30);
// pointLight.position.set(5,5,5);
pointLight.castShadow = true;
pointLight.intensity = 30;
// scene.add(pointLight);
// 创建一个小球
const lightBall = new THREE.Mesh(
  new THREE.SphereGeometry(0.2, 20, 20),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
lightBall.position.set(5, 5, 5);
lightBall.add(pointLight);
scene.add(lightBall);

const GUI = new dat.GUI();
GUI.add(pointLight.position, "x").min(-10).max(10).step(0.01);
GUI.add(pointLight, "distance").min(0).max(10).step(0.01);
GUI.add(pointLight, "decay").min(0).max(5).step(0.01);
GUI.add(lightBall.position, "x").min(-10).max(10).step(0.01);

/**
 * 4.初始化渲染器
 */
// 创建渲染器;
const renderer = new THREE.WebGLRenderer();
// 设置渲染尺寸大小; (画布宽, 画布高);
renderer.setSize(window.innerWidth, window.innerHeight);
// 设置渲染器允许场景中的阴影贴图
renderer.shadowMap.enabled = true;
// 设置使用物理上正确的光照模式
renderer.physicallyCorrectLights = true;

// 将webgl渲染的canvas内容添加到body元素上
document.body.appendChild(renderer.domElement);

/**
 * 5.创建控制器
 */
// 创建轨道控制器; (相机,渲染器Canvas);
const control = new OrbitControls(camera, renderer.domElement);
// 设置阻尼感,操作效果更真实;
control.enableDamping = true;

/**
 * 添加坐标轴辅助器
 */
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const clock = new THREE.Clock();
/**
 * 封装渲染函数
 */
function render() {
  let time = clock.getElapsedTime();
  lightBall.position.x = Math.sin(time) * 3;
  lightBall.position.z = Math.cos(time) * 3;
  lightBall.position.y = Math.sin(time) * 3;
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
