let dataPage={
    tempNum:0,
    beautify:0,
    userInfo:{
        userName:"broszhu",
        userAge:"26",
        userGender:"man"
    }
};

let pageUtility={
    consoleUserInfo:function (flag) {
        console.log(dataPage.userInfo.userName);
        console.log(flag);
        console.log(dataPage.userInfo.userAge);
        console.log(dataPage.userInfo.userGender);
    },
    warningInfo:function (message,e) {
        e ? e.preventDefault() : void(0);
        console.warn(message);
    },
    modifier:function (msg) {
        console.warn(msg);
    },
    beautify:function () {
        console.log();
    }
};

let vue=new Vue({
    el:"#app",
    data:dataPage,
    methods:pageUtility
});