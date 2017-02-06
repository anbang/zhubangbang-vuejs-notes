##### Vue的参数

- el			挂载元素
- data  		数据	
- methods	方法集合
- 生命周期

# el 挂载元素

这里是所要挂载的元素，用的选择器是尊选CSS选择器的；比如#id1/.class2/body 等；

# data 数据

可以放“字符串”，“数字”，“布尔值”，“数组”，“JSON对象”等；

> 注意，在JSON的时候；vue1和vue2是不一样的，vue1默认是[object Object]；但是在vue2.X版本里，是直接可以把对象给输出来的；

# methods	方法集合

这里面的方法中的this，指向的是vue（不是Vue）；方法data里面的数据，只需要this.dataName 就可以了

        this.dataName.push("pushData")

触发这些方法的事件可以有click/dbclick，mouseover、mouseout、mousedown等等

# 声明周期

- beforeCreate  初始化实例之前
- created       实例已经创建
- beforeMount   在挂载开始之前被调用(相关的render函数首次被调用)                  该钩子在服务器端渲染期间不被调用。
- mounted       el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子             该钩子在服务器端渲染期间不被调用。
- beforeUpdate  数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前                该钩子在服务器端渲染期间不被调用。
- updated       由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子      该钩子在服务器端渲染期间不被调用。
- activated     keep-alive组件激活时调用。                                     该钩子在服务器端渲染期间不被调用。
- deactivated   keep-alive组件停用时调用                                       该钩子在服务器端渲染期间不被调用。
- beforeDestroy 销毁之前
- destroyed     销毁之后

![](http://cn.vuejs.org/images/lifecycle.png)






 