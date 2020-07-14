let axios = require('axios');
// console.log(axios);



let httpUrl = 'https://www.dygod.net/html/gndy/jddy/20200711/113408.html';
let httpUrl1 = 'https://www.dytt8.net/index.htm';
axios.get(httpUrl1, {
    headers: {'X-Requested-With': 'XMLHttpRequest'}
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})