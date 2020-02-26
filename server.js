const express = require("express");
// const router = express.Router();
// const router = require("./components/message/network");
const router = require("./network/routes");
// const response = require("./network/response");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);

router(app);

// app.use('/', function(req, res){
//     res.send('Hola')
// })

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
