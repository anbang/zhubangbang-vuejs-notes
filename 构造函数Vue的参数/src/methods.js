let pageData={
    string:"12313",
    number:12313,
    boolean:false,
    array:["1111",2222,"33333"],
    json:{
        "a":"AAAA",
        "b":"BBBB",
        "c":"CCCC"
    },
    showFlag:true
};
let pageUtility={
    show:function (e) {
        e.preventDefault();
        alert("show is ok")
    },
    add:function (e) {
        this.array.push("pushData")
    },
    toggle:function (e) {
        this.showFlag=!this.showFlag;
    }
};
let vue=new Vue({
    el:"#page-methods",
    data:pageData,
    methods:pageUtility
});