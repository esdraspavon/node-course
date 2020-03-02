const express = require("express");
const app = express();
const server = require('http').Server(app);

const socket = require('./socket');

const db = require("./db");
db("mongodb+srv://user:user123@telegrom-ohixc.mongodb.net/test?retryWrites=true&w=majority");

const router = require("./network/routes");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);

socket(server);

router(app);

// app.use('/', function(req, res){
//     res.send('Hola')
// })

app.use("/app", express.static("public"));

server.listen(3000, function() {
  console.log("La aplicación esta escuchando en http://localhost:3000");
});
