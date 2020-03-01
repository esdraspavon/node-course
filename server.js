const express = require("express");

const db = require("./db");
db(
  "mongodb+srv://user:user123@telegrom-ohixc.mongodb.net/test?retryWrites=true&w=majority"
);

const router = require("./network/routes");

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
