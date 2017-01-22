指令是直接写在HTML元素上的；`v-` 这种开头的就是指令；

为了方便记忆，我个人把指令分为 "页面渲染指令" 、 "事件绑定指令" 、"双向值关联指令" 、"其它指令"、"自定义指令"

# 指令的初识

![](http://i.imgur.com/ZEYn6ry.png)

VUEJS属于MVVM模式(View-Model-viewModel)，是封一个组件，然后根据场景使用不同的组件；

VUE中分为三个结构；

> M - model – Model是数据的集合；
> V - view - HTML代码是view层的表现
> VM - viewModel - HTML和数据之间的管道，起到粘合剂的作用,连接view层和Model层；；

而渲染view层的HTML，就需要了解指令，如果你以前接触过angular，那么你可以非常容易的上手他，因为你会发现和angular的指令原理差不多的；

可以通过v-model在input等表单输入标签上，实现数据的双向绑定；

数据绑定就是将数据和视图相关联，互相影响，修改其中任一数据，都会立即体现到另外一层；

**输出hello word**

一段话的渲染

- {{message}}    以文本的方式渲染出来
- {{{message}}}    把message以HTML的方式渲染出来;注意写三个大括号的时候不要写成{{{}}这个了，webStorm2016亲测不能正常补全；

这么写和angular一样有个缺点FOUC的现象，就是没有加载数据的时候，此时的模版没有被替换，直接显示出{{messagr}}这样的输出，非常不利于体验；如果你仅仅是输出一段话，那么推荐你可以用下面这种的写法；

- v-text=”message”
- v-html=”message”

这样的写法；

写在大括号里的这种写法也叫插值，v-xxxx这种的写在在vue里叫做指令；

![](http://i.imgur.com/AMVDk2e.png)

**{{}}插值的其他用法**

- 1、支持忽略同步
- 2、支持作为自定义属性输出
- 3、支持表达式（注意是表达式，不是语句；三目运算符是表达式，if语句是属于语句，不属于运算符）
- 4、支持过滤器；

**一、支持忽略同步；**

如果你仅仅只是想输出数据的初始值，那么并不推荐你{{message}}这么写，推荐你下面这种的写法

- {{*messagr}} 这种渲染的时候，就只会渲染你第一次的值，后面修改并不会改变了；{{{*}}} 这也是同样的用法；

**二、支持作为自定义属性输出**

下面这种的用法也可以输出类名，ID之类的

	<p data-text="{{classText}}">测试</p>

**三、支持表达式的写法**

- 注意一：if 是属于语句，不属于表达式；
- 注意二：如果用三木运算符，请写完整，否则容易出问题；

[![表达式的测试卷哦](http://taobao.fm/wp-content/uploads/2016/12/thumb.png "表达式的测试卷哦")](http://taobao.fm/wp-content/uploads/2016/12/fa096074aba2.png)

四、支持过滤器；

注意有些教程的转换大写用的是toUpperCase，那是错误的，正确的是uppercase;(版本V2.0+)


##### 1、页面渲染指令

- v-text
- v-html
- v-if
- v-show
- v-else
- v-else-if
- v-for
- v-bind (简写为:)

##### 2、事件绑定指令

- v-on(简写为@)

##### 3、动态修改双向值指令

- v-model

##### 4、其它选择器

- v-pre
- v-cloak
- v-once

# 一、页面渲染指令详解；

**v-text**

这个指令可以更新元素的textContent，{{}}插值也被编译为textNode的一个v-text指令；两者相似，可以看作等价的；

**v-html**

这个指令可以更新元素的htmlContent,等价于{{{}}}这种的写法；

**v-if**

这个指令可以完全根据表达式的值在DOM中生成或者不生成一个元素/元素块；

原理：

- 表达式值为true，对应元素的clone值会被重新插入到DOM中（FOUC）；
- 表达式值为false，对应的元素在DOM中s输出后再删除；

为了更好的组件化，if可以用作大段的HTML判断(template、style、script这三个标签分别包裹HTML/JS/CSS的代码)，如下；

[![v-if](http://taobao.fm/wp-content/uploads/2016/12/v-if_thumb.png "v-if")](http://taobao.fm/wp-content/uploads/2016/12/v-if.png)

注意：template在虚拟DOM中仅仅是一个包装元素，作为一个判断作用，我个人感觉类似代码块的{}这种的意思，在真实的DOM输出时，template这个标签并不会会被输出的；

**v-show**

字面理解，就是显示，这个指令就像他的名字一样，只是控制元素的display，无论里面的表达式结果为true还是false，都会渲染出来，然后再根据表达式为真还是假来切display；

[![v-show](http://taobao.fm/wp-content/uploads/2016/12/v-show_thumb.png "v-show")](http://taobao.fm/wp-content/uploads/2016/12/v-show.png)

亲测v-show不支持template标签，通过上面的例子可以看出，v-show是通过display来判断，上面的isMan和isWoman一个true一个为false，通过看elements，为false的有一个行内样式display为none的属性；

v-if和v-show的区别；

- 1、if是虚拟DOM中运算后，为false值的不输出在页面，属于真实渲染，show是全部输出；亲测输出的时候，show和if都有FOCUS现象；一闪而过,哈哈懵逼了！
- 2、if切换的时候是真实的销毁和重建条件块内的事件监听器和子组件，代价较高，但是更彻底；show切换时候更加效率，因为他只控制了css
- 3、if支持template标签，show不支持template标签
- 4、一般show用于频繁切换的场景（因为DOM全部输出了，切换的成本低）；if用于几乎不切换的场景（因为真实渲染，渲染的更干净，不像show的页面初始输出成本高）

**v-else**

这个指令是对if和show指令的补充，写的一个else块；

[![v-else](http://taobao.fm/wp-content/uploads/2016/12/v-else_thumb.png "v-else")](http://taobao.fm/wp-content/uploads/2016/12/v-else.png)

- v-else元素必须立即跟在v-if或v-show元素的后面——否则它不能被识别；
- v-else元素是否渲染在HTML中，取决于前面使用的是v-if还是v-show指令。

**v*else-if** 2.1.0新增

v-else-if，顾名思义，用作 v-if 的 else-if 块。

![](http://i.imgur.com/1zRnNI7.png)

**v-for**

渲染列表等数组对象；用法如下

[![v-for](http://taobao.fm/wp-content/uploads/2016/12/v-for_thumb.png "v-for")](http://taobao.fm/wp-content/uploads/2016/12/v-for.png)

**v-bind:**

可以在其名称后面带一个参数，中间放一个冒号隔开，这个参数通常是写HTML元素的特性（attribute），图片的src等；

- 用法 v-bind:argument=”expression” 
- 例如 v-bind:class=”expression ? trueValue : falseValue”

缩写为冒号 

> 例如 :class=”expression ? trueValue : falseValue”

[![v-bind](http://taobao.fm/wp-content/uploads/2016/12/v-bind_thumb.png "v-bind")](http://taobao.fm/wp-content/uploads/2016/12/v-bind.png)

v-bind可以缩写为[：]

# 二、事件绑定指令

v-on:argument		监听事件指令  argument 可以是click/keyup/submit等

- v-on:click="doSomething"
- v-on:click="sayHello('Hi ')"
- 修饰符
	- .stop		阻止冒泡 		调用event.stopPropagation()
	- .prevent	阻止默认行为		调用event.preventDefault()		常用的
	- .once		只执行一次
	- .capture					事件监听器相关的修饰符；	TODO 添加事件侦听器时使用事件捕获模式
	- .self						只当事件是从侦听器绑定的元素本身触发时才触发回调。(只当事件在该元素本身（而不是子元素）触发时触发回调)
	- .{keyCode | keyAlias} 		只在指定按键上触发回调;	TODO 待续
	- .native					监听组件根元素的原生事件

其中v-bind和v-on可以缩写为【 : 】【 @ 】

![](http://i.imgur.com/mKXMUCS.png)

- 绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。
- 注意：用在普通元素上时，只能监听 **原生** DOM 事件。**用在自定义元素组件上时，也可以监听子组件触发的自定义事件**。
- 在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 $event 属性： v-on:click="handle('ok', $event)"。

- 按键修饰符
	- @:keyup.13		keyCode是13的时候触发
	- @:keyup.enter	回车的时候
	- tab	
	- delete 	
	- esc	
	- space	
	- up	
	- down	
	- left	
	- right	


# 三、动态修改双向值指令

v-model	随着表单控件类型不同而不同

使用限制在

- input
- select
- textarea
- components

修饰符

- .lazy		取代input监听change事件
- .number	输入字符串转为数字
- .trim		输入首位空格过滤