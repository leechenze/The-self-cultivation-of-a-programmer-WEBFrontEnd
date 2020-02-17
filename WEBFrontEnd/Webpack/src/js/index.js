import '../css/index.css';
import imgSrc from '../images/1.jpg';
import '../less/index.less'
import '../scss/index.scss'
import {a, b, c} from '../index.js'
import React from 'react'

console.log(a);
console.log(b);
console.log(c);



var oRoot = document.querySelector('#root');
oRoot.innerHTML += '<br/>www.leechenze.com^_^';

let oimg = new Image();

oimg.onload = function () {
    document.body.appendChild(oimg);
}

oimg.src = imgSrc;





