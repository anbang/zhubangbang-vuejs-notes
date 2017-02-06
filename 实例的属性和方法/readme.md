# vue实例上的属性和方法

    let vm =new Vue({});
    console.log(vm);

![](http://i.imgur.com/cGUT4qP.png)

有些常用的；

- $el			挂在的元素
- $data			数据的集合，有set和get的
- $mount			手动地挂载一个未挂载的实例
- $options		实例的属性和方法
- $parent		父实例
- $root			根Vue实例，可能是自己，也可以能是父级
- $children		直接子组件
- $slots			用来访问被 slot 分发的内容
- $scopedSlots	以编程方式访问作用域生命周期
- $refs			一个对象，其中包含了所有拥有 ref 注册的子组件。
- $isServer		当前 Vue 实例是否运行于服务器

# $el 

	vm.$el.style.background='red';

# $data

        var vm=new Vue({
            el:'#box',
            data:{
                a:1
            }
        });

        console.log(vm.$data.a);

# mount 

如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。

        var vm=new Vue({
            data:{
                a:1
            }
        }).$mount('#box');

# $options	用于当前Vue实例的初始化选项。需要在选项中包含自定义属性时会有用处：

        let vm=new Vue({
            a:11,
            b:12,
            c:13,
            d:14,
            e:15,
            show:function(){
                alert("function show is run");
            },
            data:{
                a:1
            }
        }).$mount('#box');

        vm.$options.show();
        console.log(vm.$options.a);
        console.log(vm.$options.data.a);//undefined
        console.log(vm.$options);

# $parent 父实例，如果当前实例有的话。没有的时候返回undefined

# $root		

	根Vue实例，可能是自己也可以能是父级；

	console.log(vm.$root);