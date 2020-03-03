const express = require("express");
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');

const socket = require('./socket');

const db = require("./db");
db(config.dbUrl);

app.use(cors());

const router = require("./network/routes");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);

socket.connect(server);

router(app);

// app.use('/', function(req, res){
//     res.send('Hola')
// })

app.use(config.publicRoute, express.static("public"));

server.listen(config.port, function() {
  console.log(`La aplicación esta escuchando en ${config.host}:${config.port}`);
});
