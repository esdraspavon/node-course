const express = require("express");
const multer = require('multer')
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");
const config = require('../../config');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, `public${config.filesRoute}/`);
  },
  filename: function (req, file, cb) {
      const [name, extension] = file.originalname.split('.');
      cb(null, `${name}-${Date.now()}.${extension}`)
  }
})

const upload = multer({ storage: storage });

router.get("/", function(req, res) {
  const filterMessages = req.query.chat || null;
  controller
    .getMessages(filterMessages)
    .then(messageList => {
      response.success(req, res, messageList, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});
router.post("/", upload.single('file'), function(req, res) {
  console.log(req.file);
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then(fullMessage => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      console.log(e);
      response.error(
        req,
        res,
        "Información inválida",
        400,
        "Error en el controlador"
      );
    });
});
router.patch("/:id", function(req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Error interno", 500, e);
    });
});
router.delete("/:id", function(req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
    })
    .catch(e => {
      response.error(req, res, "Error interno", 500, e);
    });
});

module.exports = router;
