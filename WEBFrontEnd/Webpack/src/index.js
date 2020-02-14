import './css/index.css';
import imgSrc from './images/1.jpg';

var oRoot = document.querySelector('#root');
oRoot.innerHTML += '<br/>www.leechenze.com^_^';

let oimg = new Image();

oimg.onload = function () {
    document.body.appendChild(oimg);
}

oimg.src = imgSrc;


