
# 事件的简写

v-click => @click

### 阻止冒泡 stop

- 原声的写法: e.cancelBubble=true;
- vue: @click.stop

### 阻止默认事件 prevent

比如右键的时候：@contwxtmwnu

- 原声的写法：e.preventDefault()
- vue的写法： @contwxtmwnu.prevent

### 键盘事件

键盘的简写

- @keyup.13
- @keyup.enter
- @keyup.up/down/left/down


# 属性的写法：

如果src，直接引用vue数据的时候，会报错，url虽然可以出来，但是控制台里会输出建议使用v-bind代替；

- v-bind：

    < img v-bind:src="url" alt=""/>

- 简写 :src

    - :src
    - :width


- class的用法
    - :class="[red]"  red是data的数据；
        - :class="[red,a,b,c]"
    - :class="{red:a,blue:false}"
    - :class="json" //json是data里的数据，其实和上面是一样的；

- style 复合样式，采用驼峰命名法；

        < div id="app">
            <p :style="[b,c]">sdsadasd</p>
            <p :style="tempStyle">sdsadasd</p>
        < /div>
            var pageData={
                b:{backgroundColor:'red'},
                c:{color:"orange"},
                tempStyle:{
                    backgroundColor:"blue",
                    color:"#fff"
                }
            };
