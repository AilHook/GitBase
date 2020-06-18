var express = require('express');
var url  = require('url');
var app = express();
var fs = require("fs");
 
app.post('/api/login', function (req, res) {
   
    var requset_url = req.url;
    var strurl  = url.parse(requset_url,true).query;
    var username = strurl.username;
    var password = strurl.password;
    console.log("请求的账号:"+username," 密码:"+password);
   
    
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        var match = false;
        var userinfo;
        if (err) 
        {
            console.log(err);
            // global.logger().error('-----=====文件读取失败');
        } 
        else
        {
            var list = JSON.parse(data)["user"];
            console.log(list);
            // list.array.forEach(element => {
            //     if(element["name"] == username && element["password"] == password)
            //     {
            //         match = true;
            //         userinfo = element;
            //     }
            // });
            
            for(var i in list)
            {
                console.log(list[i]["name"]+" "+list[i]["password"]);
                if(list[i]["name"] == username && list[i]["password"] == password)
                {
                    match = true;
                    userinfo = list[i];
                    break;
                }
            }
        }

        // 输出 JSON 格式
        var response = {
            "status":200,
            "match": match,
            "data":userinfo
        };
        console.log(response);
        res.end(JSON.stringify(response));
        
    });

    
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})