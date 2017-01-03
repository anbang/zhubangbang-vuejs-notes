##### 朱安邦的vue.js学习笔记

#### 2种准备工作

1、基于npm环境，需编译

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

2、作为普通的JS文件使用，外链式

	- 如果不想安装，也可以在html文件中引用
	- < script src="https://unpkg.com/vue/dist/vue.js"></script>
	- 个人喜欢,通过这种方式来学习vue,当学习组件化的时候，再切换到第一种方式


##### .VUE文件组成
一个.vue文件由3部分组成

- template标签	放HTML文件
- script标签		放JS文件
- style标签		放CSS文件

基于npm，需要编辑的那种方式下才会接触到.vue文件,把vue作为普通JS引入的，不存在.vue文件的概念；

##### 适合我自己的vue学习方法；

首先要搞清楚Vue是一个正常的构造函数，那么学习VUE的重点就可以总结为下面这句话；

	Vue.js基于【全局配置】，通过【指令】或者【组件】的方式渲染View层数据,需要了解【Vue这个构造函数的参数】，以及这个构造函数【实例的属性和方法】

重点是下面几个名词

- 1.全局配置		
	- 这里集合了Vue的底层配置，比如插值的语法{{}}，在全局配置里修改对应的正则，肯定可以改为ejs那种<%= %>的语法，全局配置属于修改Vue底层的一些设置；
- 2.指令			
	- 根据Model层的数据，以表达式的方式判断渲染View层数据；（支持表达式，但不支持语句）
- 3.组件			
	- 通过表达式设置，可判断输出大段View层数据；
- 4.Vue的参数		（是Vue，不是vue）			
	- 通过参数的设置，黏合View层和Model层；
- 5.vue的属性和方法	（是vue，不是Vue）		
	- 实例的属性和方法可以在View层渲染出来后，再次修改参数/配置等
	- （因为放参数进行实例化以后，已经渲染了；实例能做的肯定就是再次修改了）

# 学习Vue的步骤可以分为；

##### 1.研究指令/组件（Vue如何渲染View层）；
##### 2.研究Vue这个构造函数的参数（实例化Vue的时候该传哪些参数(选项)）；
##### 3.实例的属性和方法（实例化Vue后，如果修改实例）；
##### 4.研究全局配置（根据项目定制化Vue）；


----------


# 目录

# hello word

- [vue初识](./doc-hello-word)

# 指令

# 组件

# Vue的参数	(Vue是构造函数)

# vue的属性	(vue是实例)

# vue的方法	(vue是实例)