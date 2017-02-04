let httpUrl,httpKeyword,httpType;
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
    showFlag:true,
    keyword:"",
    searchLenovo:[],
    nowIndex:-1
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
    },
    getBaiDuKeyword:function (ev) {
        console.log(ev.keyCode);
        if(ev.keyCode==38 || ev.keyCode==40){
            return;
        }else if (ev.keyCode==13){
            window.open('https://www.baidu.com/s?wd='+this.keyword);
            this.keyword='';
        }

        httpUrl="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
        httpKeyword={wd:this.keyword};
        httpType={jsonp:'cb'};

        this.$http.jsonp(httpUrl,httpKeyword,httpType)
            .then(
                function (data) {
                    this.searchLenovo=data.data.s;
                },
                function(error){
                    console.log(error);
                }
            );
    },
    directionDown:function (e) {
        this.nowIndex++;
        if(this.nowIndex==this.searchLenovo.length){
            this.nowIndex=-1;
        }
        this.keyword=this.searchLenovo[this.nowIndex]
    },
    directionUp:function (e) {
        this.nowIndex--;
        if(this.nowIndex==-2){
            this.nowIndex=this.searchLenovo.length-1;
        }
        this.keyword=this.searchLenovo[this.nowIndex]
    }
};
let vue=new Vue({
    el:"#page-methods",
    data:pageData,
    methods:pageUtility
});