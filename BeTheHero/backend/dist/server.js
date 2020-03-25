"use strict";
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
require("dotenv/config");
var _cors = require("cors");
var _cors2 = _interopRequireDefault(_cors);
var _express = require("express");
var _express2 = _interopRequireDefault(_express);

// Importa as variaveis de ambiente .env
const { LOCALE, HOME_URL, WORK_URL, PORT } = process.env;

const app = _express2.default.call(void 0);

// Permite acesso externo
app.use(_cors2.default.call(void 0));

// Desativa o X-Powered-By: Express
app.disable("x-powered-by");

// Criamos uma rota raiz com o texto Hello World!
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Passamos a porta e endereço onde o servidor ficará ouvindo
app.listen(PORT || 3333, () => {
  console.log(
    "\x1b[34m%s\x1b[0m",
    `[running] server on http://${
      LOCALE === "HOME" ? HOME_URL : WORK_URL
    }:${PORT}`
  );
});
