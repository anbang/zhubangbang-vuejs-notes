//Model层
let pageData={
    user_name:" 朱安邦",
    user_age:16,
    user_whois:true,
    user_medal:false,
    user_gender:"man",
    message:"hello ",
    comment:"<span style='color: red;'>vue是一个女子框架,党自强</span>",
    friends:[
        {name:"某某一", age:"25", gender:"man"},
        {name:"某某二", age:"45", gender:"woman"},
        {name:"某某三", age:"14", gender:"man"},
        {name:"某某四", age:"19", gender:"woman"},
    ]
};

//对View层的事件处理方法
let pageUtility={
    doSomething:function (e) {
        e.preventDefault();
        console.log(this.user_name,this);
    },
    sayHello:function (arg,e) {
        e?e.preventDefault():void(0);
        console.log( this.message + this.user_name + " ("+ arg + ")",this);
    }
};

//View Model层 链接View和Model，粘合剂的作用
let vue=new Vue({
    el:"#App",
    data:pageData,
    methods:pageUtility
});

console.dir(vue);