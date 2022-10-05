const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

const magic = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];
app.use(morgan("dev"));

app.get("/greeting/:name", (req, res) => {
  const { name } = req.params;
  res.send(`${name}! It's so great to see you!`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const { total, tipPercentage } = req.params;
  const tip = total * (tipPercentage / 100);
  tip.toFixed(2);
  res.send(`Tip is: $${tip}`);
});

app.get("/magic/:question", (req, res) => {
  const { question } = req.params;
  answer = magic[Math.floor(Math.random() * magic.length)];
  res.send(`${question}: ${answer}`);
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
