使用方法，基于vue，需要先引入vue；

    <script src="js/vue.js"></script>
    <script src="js/vue-resource.js"></script>
    
##### 基本语法

引入vue-resource后，可以基于全局的Vue对象使用http，也可以基于某个Vue实例使用http。

    // 基于全局Vue对象使用http
    Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
    Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
    
    // 在一个Vue实例内使用$http
    this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);
    this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);

在发送请求后，使用then方法来处理响应结果，then方法有两个参数，第一个参数是响应成功时的回调函数，第二个参数是响应失败时的回调函数。

    // 传统写法
    this.$http.get('/someUrl', [options]).then(function(response){
        // 响应成功回调
    }, function(response){
        // 响应错误回调
    });
    
    
    // Lambda写法
    this.$http.get('/someUrl', [options]).then((response) => {
        // 响应成功回调
    }, (response) => {
        // 响应错误回调
    });

##### 支持的HTTP方法
vue-resource的请求API是按照REST风格设计的，它提供了7种请求API：

- get(url, [options])
- head(url, [options])
- delete(url, [options])
- jsonp(url, [options])
- post(url, [body], [options])
- put(url, [body], [options])
- patch(url, [body], [options])

除了jsonp以外，另外6种的API名称是标准的HTTP方法。当服务端使用REST API时，客户端的编码风格和服务端的编码风格近乎一致，这可以减少前端和后端开发人员的沟通成本。

客户端请求方法	服务端处理方法
this.$http.get(...)	Getxxx
this.$http.post(...)	Postxxx
this.$http.put(...)	Putxxx
this.$http.delete(...)	Deletexxx