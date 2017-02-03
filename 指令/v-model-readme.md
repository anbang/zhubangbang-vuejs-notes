# 三、动态修改双向值指令

v-model	随着表单控件类型不同而不同;双向数据绑定

使用限制在

- input
- select
- textarea
- components

修饰符

- 一、基本用法
- 二、绑定值
- 三、修饰符
    - .lazy		取代input监听change事件
    - .number	输入字符串转为数字
    - .trim		输入首位空格过滤

# 一、基本用法

v-model使用限定在表单元素上，

##### type=text/textarea

        <span>充值金额：</span>
        <input v-model="userName" type="text" placeholder="edit me">
        <p>您输入的金额是: {{ userName }}</p>

当用户操作文本框的时候，vue.userName会自动修改和更新值；

##### checked