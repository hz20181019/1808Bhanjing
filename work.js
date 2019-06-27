let http = require("http")
let url = require("url")
let obj = require("./obj.js")
let serve = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/plain;charset=utf-8")
    let{pathname,query} = url.parse(req.url,true)
    if(pathname==="/user"){// 路径一定要加/
        console.log(query.name);
        return res.end("访问的是user")        
    } 
    if(pathname==="/obj"){
        return res.end(JSON.stringify(obj));
    }
    if(pathname==="/admin"){
        return res.end("admin")//admin
    }
    res.end("404");//404
})
serve.listen(3000,function(){
    console.log("服务器3000端口启动")
})