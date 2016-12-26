require('babel-core/register');
require("babel-polyfill");

require('./app');
var ds= "1".padEnd(3,"0");
console.error(ds); // 海报例子
//require('./sleep'); // sleep例子