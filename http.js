let http = require("http") //引入http模块
//创建自己的第一个服务器  
// createServe 创建服务器的函数,参数是回调函数,回调函数的参数 req--request请求 res--response响应
let serve = http.createServer((req,res)=>{
    res.end("hello world") //给前端的响应,里面传的值需要是json/字符串(一般不用),一般都是json
});
//开启端口号 listen表示监听的端口号  listen的参数 (端口号,回调函数)  第二个参数可以写一个回调函数,可以不写
//函数中传函数是回调函数
serve.listen(3000,function(){
    console.log("3000启动成功")
})
