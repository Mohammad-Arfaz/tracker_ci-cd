const express =require('express');
const app =express();
const http=require("http");
const socketio =require("socket.io");
const server =http.createServer(app);
const path =require('path');

const io =socketio(server);

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

io.on("connection",function (socket){
    socket.on("send-location",function(data){//recieving the send-loc from the fend
        io.emit("recieve-location", {id:socket.id, ...data})//sending receive loc to f-end
    });
    socket.on("disconnect",function(){
        io.emit("user-disconnect",socket.id)//for discon sending ikt to f-end
    })
})

app.get("/",(req,res)=>{
    res.render("index");
})

server.listen(3000);