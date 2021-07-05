var express=require("express"
app=express()
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
}.listen(8080)
