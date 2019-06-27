//先读取json 要先转对象 数组调用splice替换新的数据  在写入文件  这是异步的
let path = require("path");
let fs = require("fs");
let fsPromise = fs.promises;
let filename = path.join(__dirname,"good.json");//路径
fsPromise.readFile(filename,"utf-8").then(data=>{
    //console.log(data);//读取出来的是json 转成能操作的对象
    data = JSON.parse(data);//是数组
    data.push({
        id:2,
        name:"荔枝"
    });
    //写入数据的时候要把对象转成json
    fsPromise.writeFile(filename,JSON.stringify(data),'utf-8')
})
// 作业：id为1的这一项 name 修改成"香蕉"  读 写