const express = require("express");
const app = express();
app.listen(3000);
module.exports = app.get("/", (request, response) => {
  response.send("Home Page");
});
module.exports = app.get("/about", (request, response) => {
  response.send("About Page");
});
