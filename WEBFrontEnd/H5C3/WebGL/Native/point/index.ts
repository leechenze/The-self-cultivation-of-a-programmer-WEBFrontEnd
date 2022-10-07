/** WebGL全局声明 */
var WebGlObj: any,
  // 顶点着色器源码
  vertexShaderSource: String = `
    void main(void){
      // 给内置变量赋值像素大小
        gl_PointSize=60.0;
      // 顶点位置,位于坐标原点
        gl_Position = vec4(0.0,0.0,0.0,0.1);
    }
  `,
  // 片元着色器源码
  fragmentShaderSource: String = `
    void main(void){
      // 定义片元颜色
      gl_FragColor = vec4(0.0,0.0,1.0,0.5);
    }
  `;

/** 初始化着色器-封装 */
function initShader(
  gl: any,
  vertexShaderSource: String,
  fragmentShaderSource: String
): void {
  // 创建顶点着色器对象
  let vertexShaderObj = gl.createShader(gl.VERTEX_SHADER);
  // 创建片元着色器对象
  let fragmentShaderObj = gl.createShader(gl.FRAGMENT_SHADER);
  // 引入顶点,片元着色器源码
  gl.shaderSource(vertexShaderObj, vertexShaderSource);
  gl.shaderSource(fragmentShaderObj, fragmentShaderSource);
  // 编译顶点,片元着色器
  gl.compileShader(vertexShaderObj);
  gl.compileShader(fragmentShaderObj);
  // 创建程序对象
  let program = gl.createProgram();
  // 附着顶点着色器和片元着色器到程序对象
  gl.attachShader(program, vertexShaderObj);
  gl.attachShader(program, fragmentShaderObj);
  // 链接program
  gl.linkProgram(program);
  // 使用program
  gl.useProgram(program);
  // 返回程序对象Program;
  return program;
}

/** 入口函数 */
function init() {
  // 获取画布DOM元素
  let WebGLDOM: any = document.getElementById("WebGLBox");
  // 通过getContext获取webgl上下文
  WebGlObj = WebGLDOM.getContext("webgl");
  // 初始化着色器
  let program = initShader(WebGlObj, vertexShaderSource, fragmentShaderSource);
  // 开始绘制, 显示器显示结果
  WebGlObj.drawArrays(WebGlObj.POINTS, 0, 1);
}
