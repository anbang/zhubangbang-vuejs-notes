//Model层
let pageData={
  imgSrc:"http://cn.vuejs.org/images/logo.png",
  logoName:"ad-demo.png",
  isRed:true,
  size:32,
  targetClass:"origin",
  targetBg:"targetBg",
  message:"hello word",
  active:{
    origin:true,
    targetBg:true
  }
};

//事件的处理方法
let pageUtility={};
let pgeComputed={};

//View Model  链接View和Model
let vue=new Vue({
  el:"#App",
  data:pageData,
  methods:pageUtility,
  computed:pgeComputed
});
