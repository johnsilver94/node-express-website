const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const arr = ["hello", "world", "test"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extend: true }));

app.get("/", (req, res) => res.render("index", { arr: arr }));

app.get("/create", (req, res) => res.render("create"));
app.post("/create", (req, res) => {
  arr.push(req.body.text);
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
