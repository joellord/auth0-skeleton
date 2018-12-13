const express = require("express");
const randopeep = require("randopeep");
const expressjwt = require("express-jwt");
const cors = require("cors");
const auth0Config = require("./config");
const app = express();

const NAME = "Joel Lord";

let jwtCheckOptions = auth0Config;

const jwtCheck = expressjwt(jwtCheckOptions);

app.use(cors());

app.get("/headline", (req, res) => {
  res.status(200).send(randopeep.clickbait.headline());
});

app.get("/protected/headline", jwtCheck, (req, res) => {
  res.status(200).send(randopeep.clickbait.headline(NAME));
});

app.get('*', function (req, res) {
  res.sendStatus(404);
});

app.listen(8888, () => console.log("API started on port 8888"));