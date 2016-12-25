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


##### VUE组成
vue文件由3部分组成

- template标签	放HTML文件
- script标签		放JS文件
- style标签		放CSS文件

#### 需要注意的Vue对象的属性

	new Vue({
	  //data是Vue对象的数据
	  data:{
	    a:1,
	    b:[]
	  },
	
	  //methods 是Vue对象的方法集合
	  methods:{
	    bind:function () {
	
	    },
	    toDoThing:function () {
	
	    }
	  },
	
	  //watch 设置了对象的监听方法
	  watch:{
	    'a':function (val,oldVal) {
	      console.log(val,oldVal);
	    }
	  }
	})

## 指令：HTML和vue对象的粘合剂；

##### 页面渲染 从data里面取数据

HTML和JS文件之间的通讯(像angular的用法)

- v-text 输出Text
- v-html
- {{}}

控制显示和隐藏

- v-if 是判断，直接不渲染 ，看不到DOM
- v-show 不显示，用的display:none来写的，可以看到DOM

循环列表的

- v-for 把内容循环出来

	  <ul>
	    <li v-for='{item in items}'>
	      <p v-text='item.attr'></p>
	    </li>
	  </ul>

数据结构如下：

	  data:{
	    a:1,
	    items:[
	      {
	        attr:"one"
	      },
	      {
	        attr:"two"
	      },
	      {
	        attr:"three"
	      }
	    ]
	  },

##### 事件绑定 v-on  - 从methods中取方法

v-on 可以简写为@
 
- v-on:click="doThis"
- @click=""doThis	//v-on: 可以简写为@

	  //对应的方法在methods中
	  methods:{
	    doThis:function () {
	
	    }
	  },

##### 属性绑定 v-bind 一般用于绑定class

v-bind 可以简写为:

常见用法如下

	  <img :src="inageSrc">
	  <div :class="{red:isRed}"></div>
	  <div :class="[classA,classB]"></div>
	  <div :class="[classA,classB,{classC:isC}]"></div>
