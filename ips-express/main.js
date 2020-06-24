var express = require('express');
var url  = require('url');
var app = express();
var fs = require("fs");
 
const bodyParser = require('body-parser');
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据


app.all('*',function(req,res,next){  
    let origin=req.headers.origin;
      res.setHeader('Access-Control-Allow-Origin',"*");
      res.setHeader('Access-Control-Allow-Headers','Content-Type');
        next();
   })

app.post('/api/login', function (req, res) {
   
    var requset_url = req.url;
    var strurl  = url.parse(requset_url,true).query;
    // console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
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
            // console.log(list);
            // list.array.forEach(element => {
            //     if(element["name"] == username && element["password"] == password)
            //     {
            //         match = true;
            //         userinfo = element;
            //     }
            // });
            
            for(var i in list)
            {
                // console.log(list[i]["name"]+" "+list[i]["password"]);
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
            "code": match?1:0,
            "content":userinfo
        };
        console.log(response);
        //res.setHeader("Access-Control-Allow-Origin","*");
        res.end(JSON.stringify(response));
        
    });

    
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})