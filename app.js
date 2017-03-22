var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
  res.send('Welcome to my FreeCodeCamp header parser project, to use navigate to /whoami');
});

app.get('/whoami',function(req,res){
  var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if(ipaddress.substr(0,7)=='::ffff'){
    ipaddress = ipaddress.substr(7);
  }
  var userLan = req.headers['accept-language'].split(',')[0];
  var operatingSystem = req.headers['user-agent'].split(/[()]/g)[1];
  res.send({
    "ipaddress":ipaddress,
    "language":userLan,
    "operatingsystem":operatingSystem
  });
});

app.listen(port,function(){
  console.log(`App listening on port ${port}`);
})