import express from "express";
import path from "path";
import { Server, Socket } from "socket.io";
import http from "http";
const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"))

io.on("connection", (socket) => {
    console.log("A client connected",socket.id);

    socket.on("a client changed the color",({data}) => {

        //Broadcast to all sockets other than itself
        //socket.broadcast.emit("change the color", {data});
        
        //Only emits to the socket itself
        //socket.emit("change the color", {data});

        //Emits to everyone
        io.emit("change the color", {data});
    });
});

app.get("/", (req,res) =>{
    res.sendFile(path.resolve("./public/colors.html"));
});

server.listen(3000);