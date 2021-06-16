const express = require("express");
const app = express();

const normal = require("./normal-router");
const quantum = require("./quantum-router");

const PORT = 1111;

const time = normal.calculateTime();
const quantumTime = quantum.calculateTime();

app.listen(PORT, () => {
  console.log(`Server has been started on port http://localhost:${PORT}...`);
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res, next) => {
  res.send(
    "<h1>Go to localhost:1111/normal to see normal space and localhost:1111/quantum to see quantum space</h1>"
  );
});

app.get("/normal", (req, res, next) => {
  res.render("normal", {
    year: time.years(),
    month: time.months(),
    day: time.days(),
  });
});

app.get("/quantum", (req, res, next) => {
  res.render("quantum", {
    quantumYear: quantumTime[0],
    quantumMonth: quantumTime[1],
    quantumDay: quantumTime[2],
  });
});
