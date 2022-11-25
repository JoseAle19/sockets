const { request, response } = require("express")
const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

app.get("/test/", (req = request, res = response )=> {
    // console.log(__dirname)
res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket)=>{
    console.log('Usuario conectado ')
    socket.on('disconnect', ()=>{
        console.log('Usuario desconectado')
    } )

})

server.listen(4000, () => {
    console.log("http://localhost:4000")
})