# vm指令
- v-text		{{}}	{{ message | capitalize }}
- v-html
- v-once
- v-model
- v-show
- v-if
- v-else-if
- v-else
- v-for
- v-on
	- v-on.submit.prevent.stop
	- v-on:click="doSomething"
	- @click="doSomething"
- v-bind		绑定属性		v-bind:id="rawId | formatId"
	- v-bind:href="url"
	- :href="url"
- v-pre		不需要表达式

使用js表达式

	{{ number + 1 }}
	{{ ok ? 'YES' : 'NO' }}
	{{ message.split('').reverse().join('') }}
	<div v-bind:id="'list-' + id"></div>

但是有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。

	<!-- 这是语句，不是表达式 -->
	{{ var a = 1 }}
	<!-- 流控制也不会生效，请使用三元表达式 -->
	{{ if (ok) { return message } }}