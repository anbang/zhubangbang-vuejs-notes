# hello word - vue.js传统用法，作为外部资源导入

vue.js分为最基本的2种用法，

- 1、作为外部资源导入；
	- < script src="./lib/vue.js">< /script>
- 2、借助vue-cli这个官方脚手架工，编译后执行；
	- 需要安装node环境，国内npm比较慢，我用的阿里的cnpm镜像安装包文件
	- cnpm install vue-cli -g 
	- vue init webpack my-project-test
	- cd my-project-test
	- cnpm install
	- npm run dev   //node一个本地服务，默认监听8080端口

学习vue语法，可以不用那么麻烦，直接外部引入即可；下面都是基于外部资源引入的方式

---------

简单的外部资源导入的用法例子

	<body>
	<!--View层-->
	<div id="App">
	  {{message}}
	  <input type="text" v-model="message">
	</div>
	</body>
	<script src="./lib/vue.js"></script>
	<script>
	  //Model层
	  var data={
	      message:"hello word!!!"
	  };
	
	  //View Model  链接View和Model
	  new Vue({
	      el:"#App",
	      data:data
	  })
	</script>

# 使用Vue，就是定义MVVM各个组成部分的；

- 一、定义View  		- HTML 文件
- 二、定义Model 		- data的数据
- 三、定义ViewModel	- 实例化一个Vue对象
	- 在创建Vue实例的时候，需要传入一个选项对象，
	- 参数：挂载元素 -> el、数据 -> data、方法 -> methods、模生命周期钩子
		- el: 		挂载元素,el:"#App"就是挂在id为App的这个元素上；
		- data:		指向Model
		- methods	事件的处理方法

# 一、定义View；

输出一段话的的写法,类似angular的:

- {{message}} 		以文本的方式输出message
	- 缺点和angular 一样,会有FOUC现象，（在加载的一瞬间会显示这个表达式，非常丑；不知道的还以为乱码了）
	- 过滤器 	{{ message | uppercase  }}  
		- 后面的uppercase就是对前面的messsage的修饰；
		- 在angular里，数据格式等展现都是用过滤器处理，不能直接修改源数据，angular还涉及脏值检查等；vue中应该也是用过滤器修饰数据，不能动源数据；[个人猜的，还没有具体确定]
- {{{message}}}		以HTML的方式输出message
	- 注意{{{}}这种的用法是错误的，比如左右一样的数；亲测webstorm2016三个大括号不能正常不全；

- v-text="message"	以文本的方式输出message
	- 如果仅仅是显示一段话，我更喜欢用v-text这个指令；{{message}} 等价于 v-text="message"
- v-html="message"	以HTML的方式输出message
	- {{{message}}}等价于v-html="message"


双向绑定的基本写法

	<div id="App">
	  <p>{{message}}</p>
	  <input type="text" v-model="message">
	</div>

上面的v-model 就是一种Viem层比较重要的指令;


### 指令(指令是属于View层的)

指令是直接写在HTML元素上的；

指令分为 "页面渲染指令" 和 "事件绑定指令"；

##### 页面渲染指令
- v-text		文本输出指令
	- 避免 FOUC (Flash of Uncompiled Content)
- v-html		HTML输出指令
	- 只在可信内容上使用 v-html，永不用在用户提交的内容上。
- v-if		条件渲染指令
	- 是一个布尔值判断
	- 可以使用"!"反转
	- 也可以使用".indexOf("xx")>0" 之类的判断
- v-show		条件渲染指令（适合频繁操作的场景）
	- 和v-if一样也是一个条件判断；
	- 区别是：
		- v-show指令的元素始终会被渲染到HTML，它只是简单地为元素设置CSS的style属性，（无论true和false，都会先输出，然后再隐藏；）
		- v-if是如果false，元素不输出；
		- show的性能高效，初始化的时候不美丽；
		- if直接干净，是惰性的：如果在初始渲染时条件为假，则什么也不做——在条件第一次变为真时才开始局部编译（编译会被缓存起来）；切换时消耗比较高；
		- 如果是频繁的改动的，用show；运行时条件变化可能比较小用 v-if ；
- v-else 	条件辅助渲染指令	为v-if或v-show添加一个else块；
	- v-else元素必须立即跟在v-if或v-show元素的后面——否则它不能被识别；
	- v-else元素是否渲染在HTML中，取决于前面使用的是v-if还是v-show指令。
- v-for		基于数组的渲染指令（类似JS中的for循环）
- v-bind	:argument	属性判断输出指令 
	- 可以在其名称后面带一个参数，中间放一个冒号隔开，这个参数通常是写HTML元素的特性（attribute），图片的src等；
	- 用法 v-bind:argument="expression" 
		- 例如  v-bind:class="expression ? trueValue : falseValue"
	- 缩写为冒号 
		- 例如  :class="expression ? trueValue : falseValue"
	- 修饰符
		- .sync .once .camel TODO 待续

我们也可以开发一些自定义的指令

##### 事件绑定指令

v-on:argument		监听事件指令

- v-on:click="doSomething"
- v-on:click="sayHello('Hi ')"
- 修饰符
	- .stop		阻止冒泡 		调用event.stopPropagation()
	- .prevent	阻止默认行为		调用event.preventDefault()		常用的
	- .capture.self				事件监听器相关的修饰符；	TODO 待续
	- .{keyCode | keyAlias} 		只在指定按键上触发回调;	TODO 待续

其中v-bind和v-on可以缩写为【 : 】【 @ 】

##### 动态修改双向值

v-model		只能用于表单 input select textarea

值随着表单类型不同而不同；用在表单控件上创建双向绑定；

![](http://i.imgur.com/9QbTOxN.png)

[DEMO预览](./1-hello-word.html)

# VUE的组件系统概念；

组件有点类似模块的概念，每个模块里封装好了一个功能，用到的地方直接引用下这个组件就可以了；（类似模块手机、绿色软件的概念，拿来就能用，删除就卸载）

每个模块里都会有 HTML JS CSS；这样引入的时候只需要引入一个模块，不用HTML/CSS/JS分别引入了；

![](http://cn.vuejs.org/images/components.png)

官方给出了这个图，根据HTML文档结构来构建模块；对应的如下；

	<!--View层-->
	<div id="App">

	  <!--引入导航模块-->
	  <app-nav></app-nav>
	
	  <app-view>
	
	    <!--引入边栏-->
	    <app-sidebar></app-sidebar>
	
	    <!--引入内容区-->
	    <app-content></app-content>
	
	  </app-view>
	</div>

这样就可以了（如果app-sidebar不符合我们的业务，可以再封一个 app-sidebar-two 之类的，引入即可；）

这样做有一个弊端，就是HTML/CSS/JS都偶尔在一起了；但是从总体来看，不同模块直接并不耦合；react和vue，这么做是为了屈从大的组件化思想而做出的取舍；如果是基于webpack建立的vue项目，模块的文件是app-nav.vue  这种的文件；

其中.vue包括三个部分

- template标签	放HTML文件
- script标签		放JS文件
- style标签		放CSS文件

三个标签合组了一个模块；使用的时候，只需引入一个模块；

##### 外部资源导入的方式；

这里的组件化；
Component