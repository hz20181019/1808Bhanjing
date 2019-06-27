//url 和 http 模块
let http = require("http")
let url = require("url")
let arr = require("./banner.js") 
//.js可以省略的 可以拿到数组 arr名称是自己取的
//创建服务器
let serve = http.createServer((req,res)=>{
    // 根据路径不同返回不同的结果
    //设置一个头  解决中文乱码问题
    res.setHeader("Content-Type","text/plain;charset=utf-8")
    //请求的路径会放在req上面 req.url
    // localhost:3000/user 
    // /user => pathname  对应关系
    // ?name=1 => query   对应关系
    let {pathname,query} = url.parse(req.url,true) //解构赋值  字符串转对象
    //localhost:3000/user?name=1 访问
    if(pathname==="/user"){// 路径一定要加/
        console.log(query.name);
        return res.end("访问的是user")        
    } 
    if(pathname==="/banner"){
        return res.end(JSON.stringify(arr));
        //数组转json是JSON.stringify()
    }
    //localhost:3000/admin 访问
    if(pathname==="/admin"){
        return res.end("admin")//admin
    }
    res.end("404");//404
})
serve.listen(3000,function(){
    console.log("服务器3000端口启动")
})
