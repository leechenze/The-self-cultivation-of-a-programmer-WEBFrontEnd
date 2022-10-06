"use strict";
/** WebGL全局声明 */
var WebGlObj, proMatrix4 = mat4.create(), vertexString = "\n    attribute vec3 a_position;\n    uniform  mat4  proj;\n    void main(void){\n        gl_Position = proj*vec4(a_position,1.0)  ;\n        gl_PointSize=60.0;\n    }\n  ", fragmentstring = "\n    precision mediump float;\n    void main(void){\n      gl_FragColor = vec4(0.0,0.0,1.0,1.0);\n    }\n  ";
/** 入口函数 */
function init() {
    initWebGL();
    initShader();
    initBuffer();
    draw();
}
/** WebGL初始化函数 */
function initWebGL() {
    var WebGLDOM = document.getElementById("WebGLBox");
    WebGlObj = WebGLDOM.getContext("webgl");
    WebGlObj.viewport(0, 0, WebGLDOM.clientWidth, WebGLDOM.clientHeight);
    mat4.ortho(0, WebGLDOM.clientWidth, WebGLDOM.clientHeight, 0, -1, 1, proMatrix4);
}
/** shader初始化函数 */
function initShader() {
    var vsshader = WebGlObj.createShader(WebGlObj.VERTEX_SHADER);
    var fsshader = WebGlObj.createShader(WebGlObj.FRAGMENT_SHADER);
    WebGlObj.shaderSource(vsshader, vertexString);
    WebGlObj.shaderSource(fsshader, fragmentstring);
    WebGlObj.compileShader(vsshader);
    WebGlObj.compileShader(fsshader);
    var program = WebGlObj.createProgram();
    WebGlObj.attachShader(program, vsshader);
    WebGlObj.attachShader(program, fsshader);
    WebGlObj.linkProgram(program);
    WebGlObj.useProgram(program);
    WebGlObj.program = program;
}
/** 数据缓冲区初始化函数 */
function initBuffer() {
    var aPosition = WebGlObj.getAttribLocation(WebGlObj.program, "a_position");
    var arr = [100.0, 100.0, 0, 200.0, 200.0, 0, 300.0, 200.0, 0, 400, 600, 0];
    var vertexArr = new Float32Array(arr);
    var trangleBuffer = WebGlObj.createBuffer();
    WebGlObj.bindBuffer(WebGlObj.ARRAY_BUFFER, trangleBuffer);
    WebGlObj.bufferData(WebGlObj.ARRAY_BUFFER, vertexArr, WebGlObj.STATIC_DRAW);
    WebGlObj.enableVertexAttribArray(aPosition);
    WebGlObj.vertexAttribPointer(aPosition, 3, WebGlObj.FLOAT, false, 0, 0);
    var uniformProj = WebGlObj.getUniformLocation(WebGlObj.program, "proj");
    WebGlObj.uniformMatrix4fv(uniformProj, false, proMatrix4);
}
/** WebGL绘制函数 */
function draw() {
    WebGlObj.clearColor(0.0, 0.0, 0.0, 1.0);
    WebGlObj.clear(WebGlObj.COLOR_BUFFER_BIT | WebGlObj.DEPTH_BUFFER_BIT);
    WebGlObj.drawArrays(WebGlObj.LINES, 0, 4);
    // WebGlObj.drawArrays(WebGlObj.LINES_STRIP, 0, 4);
    // WebGlObj.drawArrays(WebGlObj.LINES_LOOP, 0, 4);
}
