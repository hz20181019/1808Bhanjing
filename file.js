let fs = require("fs");
let path = require("path"); //path模块可以读绝对路径
let fsPromise = fs.promises;//node 10版本以上
// 读取文件 readFile() 参数 文件路径,读取格式 
fsPromise.readFile(path.join(__dirname,"app.js"),"utf-8").then(data=>{
    console.log(data);
})
//写入文件 writeFile 参数1：写入的文件路径 参数2：写入的数据 参数3：写入的数据格式
// fsPromise.writeFile("./a.txt","写入内容","utf-8").then(data=>{
//     console.log("写入成功")
// }) 写入不出来要改成绝对路径 这种是相对路径
fsPromise.writeFile(path.join(__dirname,"./a.txt"),"写入内容","utf-8").then(data=>{
    console.log("写入成功")
})



