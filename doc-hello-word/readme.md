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

上面的v-model 就是指令


### 指令(指令是属于View层的)

指令是直接写在HTML元素上的；

指令分为页面渲染指令和事件绑定指令；

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

我们也可以开发一些自定义的指令

##### 事件绑定指令
- v-on:argument		监听事件指令
	- v-on:click="doSomething"
	- v-on:click="sayHello('Hi ')"

其中v-bind和v-on可以缩写为【 : 】【 @ 】



