//Model层
let pageData={
  gender:"woman"//man woman undefined
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
