"use strict";
/** WebGL全局声明 */
var WebGlObj, 
// 顶点着色器源码
vertexShaderSource = "\n    void main(void){\n      // \u7ED9\u5185\u7F6E\u53D8\u91CF\u8D4B\u503C\u50CF\u7D20\u5927\u5C0F\n        gl_PointSize=60.0;\n      // \u9876\u70B9\u4F4D\u7F6E,\u4F4D\u4E8E\u5750\u6807\u539F\u70B9\n        gl_Position = vec4(0.0,0.0,0.0,0.1);\n    }\n  ", 
// 片元着色器源码
fragmentShaderSource = "\n    void main(void){\n      // \u5B9A\u4E49\u7247\u5143\u989C\u8272\n      gl_FragColor = vec4(0.0,0.0,1.0,0.5);\n    }\n  ";
/** 初始化着色器-封装 */
function initShader(gl, vertexShaderSource, fragmentShaderSource) {
    // 创建顶点着色器对象
    var vertexShaderObj = gl.createShader(gl.VERTEX_SHADER);
    // 创建片元着色器对象
    var fragmentShaderObj = gl.createShader(gl.FRAGMENT_SHADER);
    // 引入顶点,片元着色器源码
    gl.shaderSource(vertexShaderObj, vertexShaderSource);
    gl.shaderSource(fragmentShaderObj, fragmentShaderSource);
    // 编译顶点,片元着色器
    gl.compileShader(vertexShaderObj);
    gl.compileShader(fragmentShaderObj);
    // 创建程序对象
    var program = gl.createProgram();
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
    var WebGLDOM = document.getElementById("WebGLBox");
    // 通过getContext获取webgl上下文
    WebGlObj = WebGLDOM.getContext("webgl");
    // 初始化着色器
    var program = initShader(WebGlObj, vertexShaderSource, fragmentShaderSource);
    // 开始绘制, 显示器显示结果
    WebGlObj.drawArrays(WebGlObj.POINTS, 0, 1);
}
