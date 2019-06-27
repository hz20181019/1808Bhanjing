6.26上午：
##node的基础知识
Node.js 就是运行在服务端的 JavaScript。
nodejs后端语言 java/php等价 单线程异步,无阻塞i/o
###node的几个核心模块
1.http模块  创建服务器
新建文件  app.js

app.js中：
访问 localhost:3000 
效果：hello world

2.url模块 
// 0-65500端口号可以用


vscode插件  code runner
node的启动方式,我们是服务端
1.vscode插件  code runner
2.node + 文件名
服务daunt代码有改动需要重启

###node 模块的使用 commonjs规范
moulde.exports 表示导出模块  banner.js 导出
require 引入模块
作业：
// ?name=1&age=2&c=3 => {name:1,age:2,c:3}

下午：
3.path模块 解析路径 path.join
path.resolve
4.fs filesystem 文件处理 读写文件
右键paste：粘贴
桌面点击右键 --> git bash/here
1.git config --global user.name "hanjing520"
2.1.git config --global user.email "1759219301@qq.com"
这两步骤第一次需要,后面不需要
### git仓库提交的流程
-初始化git仓库 gitbash 要在你提交的文件夹下面运行
1.git init 初始化 一个仓库只需要初始化一次
2.添加文件到缓存区 git add 文件名 git add fs.js
通常使用全部添加：git add -A 表示all的意思 所有 或者(git add *)
3.提交文件到本地仓库 (自己电脑)
git commit -m''  -m:通常表示你此次提交内容的备注
git commit -m'添加了轮播图'
git commit -m'第一次提交' 内容还可以乱写
添加远程仓库 打开github
git remote add
origin 仓库名 
仓库地址


查看远程仓库地址：git remote - v

推送代码到远程仓库 git push origin master
新建文件 type nul>文件名

git bash 进入文件夹中然后空白处git bash
window 常用Linux命令
touch 建立文件 type nul> a.js
dir 看目录列表
mkdir 建立文件夹
cd 空格 进文件路径
window dir/mac ls 文件目录列表







