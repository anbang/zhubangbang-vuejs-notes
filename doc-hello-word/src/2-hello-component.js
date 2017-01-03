let pageData={
    bookList:[
        {name:"js book"},
        {name:"css book"},
        {name:"html book"},
        {name:"node book"},
    ]
};

let pageUtility={};

Vue.component("test",{
    props:['some'],
    template:'<li>{{some.name}}</li>'
});

let vue=new Vue({
    el:"#App",
    data:pageData,
    methods:pageUtility
});