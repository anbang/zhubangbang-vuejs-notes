##### Api
- 指令
- 特殊属性
- 选项（构造函数参数）
	- 数据
	- DOM
	- 生命周期钩子
	- 资源
	- 杂项
- 实例
	- 属性
	- 数据相关的方法
	- 事件相关的方法
	- 生命周期
- 配置
- 全局Api
- 组件

# 11条指令(if判断算一条)

- v-text ->{{msg}}
- v-html ->{{{msg}}}
- v-model 用在表单控件上input/select/textarea/components
	- .lazy		渠道input监听change事件
	- .number	数组字符串转为数字
	- .trim		过滤输入的首位空格
- v-if /else if /else	条件渲染，根据真假值切换是否输出
- v-show		条件渲染，根据真假值切换display
- v-for
		<div v-for="item in items">{{ item.text }}</div>
		<div v-for="(item, index) in items"></div>
		<div v-for="(val, key) in object"></div>
		<div v-for="(val, key, index) in object"></div>

		<div v-for="item in items" :key="item.id">
		  <!-- 内容//key 并不特别与 v-for 关联，key 还具有其他用途 -->
		</div>

- v-bind	->:
	- :src="imageSrc"
	- :src="'/path/to/images/' + fileName"
	- :class="{ red: isRed }"
	- :class="[classA, classB]"
	- :class="[classA, { classB: isB, classC: isC }]"
	- :style="{ fontSize: size + 'px' }"
	- :style="[styleObjectA, styleObjectB]"
	- v-bind="{ id: someProp, 'other-attr': otherProp }"
	- v-bind:text-content.prop="text"	通过 prop 修饰符绑定 DOM 属性
	- :prop="someThing"
	- <svg :view-box.camel="viewBox"></svg>
- v-on ->@	（共11个修饰符）
	- .stop		-> event.stopPropagation()
	- .prevent  -> event.preventDefault()
	- .native	-> 监听组件根元素的原生事件；
	- .once		-> 只触发一次
	- .captrue	-> 添加时间侦听器时使用captrue模式
	- .self		-> 只当事件是从侦听器绑定的元素本身触发时才触发回调。
	- .left		-> (2.2.0) 只当点击鼠标左键时触发
	- .right		-> (2.2.0) 只当点击鼠标右键时触发。
	- .middle	-> (2.2.0) 只当点击鼠标中键时触发。
	- .{keyCode|keyAlisa}	->  只当事件是从特定建触发时才触发回调 

	- 捕获原生事件，需要传参$event
	- @click.prevent | @submit.prevent
	- @click.stop.prevent
	- @keyup.enter="onEnter"
	- @keyup.13
	- @click.once="doThis"
- v-pre
- v-cloak
- v-once
