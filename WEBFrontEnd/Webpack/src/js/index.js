import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import imgSrc from '../images/1.jpg';
import '../less/index.less';
import '../scss/index.scss';
import { a, b, c } from '../index.js';


// ReactDOM.render( <
//     h2 > react语法 < /h2>,
//     document.querySelector('#root');
// )


var oRoot = document.querySelector('#root');
oRoot.innerHTML += '<br/>www.leechenze.com^_^';

let oimg = new Image();

oimg.onload = function() {
    document.body.appendChild(oimg);
}

oimg.src = imgSrc;