var express=require("express")
app=express() 
var Unblocker = require('unblocker'); 
var unblocker = new Unblocker({prefix: '/main/'}); // this must be one of the first app.use() calls and must not be on a subdirectory to work properly 
app.use(unblocker); 
app.get('/',(req,res)=>{ 
  res.sendFile(__dirname+'/index.html') 
}).listen(8080)
app.get('/unblocker',(req,res)=>{ 
  res.sendFile(__dirname+'/unblocker.html') 
}).listen(8080)
