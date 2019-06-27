let path = require("path");
__dirname //绝对路径  杠杠 两个杠
console.log(__dirname);
let r = path.resolve(__dirname,"/a","app.js")
//区别 了解 resolve这个可以拼多拼接一层路径   效果：e:\a\app.js 一般少用
console.log(r)
let r1 = path.join(__dirname,"app.js")
console.log(r1)
