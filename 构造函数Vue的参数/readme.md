##### Vue的参数

- el			挂载元素
- data  		数据	
- methods	方法集合

# el 挂载元素

这里是所要挂载的元素，用的选择器是尊选CSS选择器的；比如#id1/.class2/body 等；

# data 数据

可以放“字符串”，“数字”，“布尔值”，“数组”，“JSON对象”等；

> 注意，在JSON的时候；vue1和vue2是不一样的，vue1默认是[object Object]；但是在vue2.X版本里，是直接可以把对象给输出来的；

# methods	方法集合

这里面的方法中的this，指向的是vue（不是Vue）；方法data里面的数据，只需要this.dataName 就可以了

        this.dataName.push("pushData")

触发这些方法的事件可以有click/dbclick，mouseover、mouseout、mousedown等等


 