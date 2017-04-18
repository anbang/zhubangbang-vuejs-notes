vue实例，用vm表示；

    var vm=new Vue({
        el:".book-list",
        data:pageData,
        methods:pageMethod
    });


实例vm有一些属性，可以直接访问构造函数的信息
- $data
- $el
- $options		用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处：
- $parent		父实例，如果当前实例有的话。
- $root			当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自已。
- $children		当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。
- $slots
- $scopedSlots	在使用 render 函数书写一个组件时，访问 vm.$slots /vm.$scopedSlots最有帮助。
- $refs			一个对象，其中包含了所有拥有 ref 注册的子组件。
- $isServer		当前 Vue 实例是否运行于服务器。

vm上的一些方法
- $watch			观察 Vue 实例变化的一个表达式或计算属性函数,回调函数得到的参数为新值和旧值。
- $set
- $delete

vm的事件
- $on
- $once
- $off
- $emit