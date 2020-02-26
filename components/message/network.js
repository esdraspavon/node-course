const express = require("express");
const router = express.Router();

const response = require("../../network/response");

router.get("/", function(req, res) {
  console.log(req.headers);
  //   res.header({
  //     "custom-header": "Nuestro valor personalizado"
  //   });
  //   res.send("Hola desde get");
  response.success(req, res, "Lista de mensajes");
});
router.post("/", function(req, res) {
  console.log(req.query.error);
  //   res.status(201).send({ error: "", body: "Creado correctamente" });
  if (req.query.error) {
    response.error(
      req,
      res,
      "Error inesperado",
      500,
      "Es solo una simulacion de los errores"
    );
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

module.exports = router;
