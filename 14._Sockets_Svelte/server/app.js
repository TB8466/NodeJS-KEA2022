import "dotenv/config";
console.log(process.env.SESSION_SECRET);

import express from "express";
const app = express();

app.use(express.urlencoded({extended: true}));

import http from "http";
const server = http.createServer(app);

import session from "express-session";
const sessionMiddleware = session({
    secret: "keyboard cat",
    saveUninitialized:true,
    resave: false 
});
app.use(sessionMiddleware);

import {Server, Socket} from "socket.io";
const io = new Server(server);

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

io.on("connection", (socket) => {

    socket.on("colorChanged", ({data}) =>{
        const username = socket.request.session.username;

        io.emit("changeColor",{data, username});
    });
});

import path from "path";
app.use(express.static(path.resolve("../client/public")));




import router from "./routers/userregistration.js";
import { nextTick } from "process";
app.use(router);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server is running on:",PORT));