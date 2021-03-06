const express = require("express");
const app = express();

const cors = require('cors')
app.use(cors())


const server = require("http").Server(app);
const io = require("socket.io")(server, {
    cors: {
        //origin: "http://localhost",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

io.on("connection", socket => {
    const { id } = socket.client;
    console.log(`User connected: ${id}`);
});