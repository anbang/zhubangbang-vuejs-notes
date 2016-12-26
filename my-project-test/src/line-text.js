//Model层
let pageData={
  message:"hello word , by input"
};

//事件的处理方法
let pageUtility={
  doSomething:function (e) {
    e.preventDefault();
    console.log(this.message,this);
  },
  sayHello:function (arg,e) {
    // e.preventDefault();
    console.log( arg + "wifisong",this);
  }
};

//View Model  链接View和Model
let vue=new Vue({
  el:"#App",
  data:pageData,
  methods:pageUtility
});

console.dir(vue);
