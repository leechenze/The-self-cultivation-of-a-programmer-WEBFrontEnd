const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");

let json = fs.readFileSync(path.join(__dirname, './userInfo.json5'), 'utf-8');
console.info(json);
json = JSON5.parse(json);
console.info(json);
