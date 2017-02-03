let pageData={
    string:"12313",
    number:12313,
    boolean:false,
    array:["1111",2222,"33333"],
    json:{
        "a":"AAAA",
        "b":"BBBB",
        "c":"CCCC"
    }
};
let pageUtility={};
let vue=new Vue({
    el:"#page-data",
    data:pageData,
    methods:pageUtility
});