# zhuanbang-vue-notes
我的vue.js学习笔记

#### 准备工作
- 基于node环境，需要安装node(node的同时会自动安装npm)
- 安装vue官方脚手架工具；
	- npm install vue-cli -g  
	- vue init webpack my-project-test  
		- 这里的时候，会提示一些基础的配件，ESLint语言校正，单元测试，我都是一路回车默认确定的；
	- cd my-project-test
	- npm install
		- 国内npm安装包比较慢，可以用淘宝的镜像安装 ;https://npm.taobao.org/
		- 安装cnpm后，每次npm使用的命令，可以替换为cnpm
	- npm run dev
		- 如果提示npm版本过低，更新下npm自身的版本的命令 npm install -g npm

- 如果不想灌装，也可以在html文件中引用
	- < script src="https://unpkg.com/vue/dist/vue.js"></script>
