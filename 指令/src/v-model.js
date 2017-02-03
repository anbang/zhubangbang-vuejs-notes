let pageData={
    userName:"",
    textareaMessage:"",
    checkedInfo:false,
    checkedAry:[],
    radioInfo:"",
    selectedInfo:[]
};

let pageUtility={};

let vue=new Vue({
    el:"#app",
    data:pageData,
    methods:pageUtility
});