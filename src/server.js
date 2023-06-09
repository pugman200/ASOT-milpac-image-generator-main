const express = require("express");
const app = express();
const port = 42069;
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const imageGenerator = require("./index.js");
const path = require("path");
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
})
app.post("/update", jsonParser, async (req, res) => {
  let data = req.body;
  console.log(data);
  let errored = false;
  if(!data) return res.sendStatus(400);
  console.log(data.RifleManBadge != "PTE(P)");
//  if(!data.RifleManBadge || data.RifleManBadge != "PTE" & data.RifleManBadge != "PTE(P)") return res.status(400).send("No Rifleman Badge, or invalid badge");
//  if(!data.rank) return res.status(400).send("No rank");
  if(!data.Uniform) return res.status(400).send("No uniform");
  if(!data.name) return res.status(400).send("No name");
  if(data.RifleManBadge)
  data.RifleManBadge = data.RifleManBadge === "PTE(P)" ? "Master Rifleman" : "Rifleman"
  await imageGenerator(data).catch((err) => {
    console.log("error caught");
    errored = true;
    console.log(JSON.stringify(err, Object.getOwnPropertyNames(err)));
    res.status(500).send(JSON.stringify(err, Object.getOwnPropertyNames(err)));
  });
  if (errored) return;
  console.log("err");
  console.log(__dirname)
  res.status(200).sendFile(path.resolve(__dirname + `/../milpac/${data.name}.png`));
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
