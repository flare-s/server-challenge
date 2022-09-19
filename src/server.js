const express = require("express");

const server = express();

const bodyParser = express.urlencoded();

const cheeseInfo = [];

server.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <title>Home</title>
        </head>
        <body>
        <h1>Hello Express</h1>
        </body>
    </html>`);
});

server.get("/colour", (req, res) => {
  const hex = req.query.hex || "ffffff";
  res.send(`
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <title>Home</title>
        <style>
            body {
                background-color: #${hex};
            }
        </style>
        </head>
        <body>
        <h1>Hello Express</h1>
        <form method="GET" action="/colour">
            <label for="hex">Insert a hex value</label>
            <input type="text" name="hex" id="hex"/>
        </form>
        </body>
    </html>`);
});

server.get("/cheese", (req, res) => {
  const cheeseItems = cheeseInfo.map(
    (cheese) => `<li>${cheese.name} | ${cheese.rating} stars</li>`
  );
  const cheeseList = `<ul>${cheeseItems.join("")}</ul>`;
  res.send(`
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <title>Home</title>
        </head>
        <body>
        <form method="POST" action="/cheese">
            <label for="cheese-name">Cheese name</label>
            <input type="text" name="name" id="cheese-name"/>
            <label for="cheese-rate">Cheese rate</label>
            <input type="range" min="0" max="5" name="rating" id="cheese-rate"/>
        </form>
        ${cheeseList}
        </body>
    </html>`);
});

server.post("/cheese", bodyParser, (req, res) => {
  const newCheese = {
    name: req.body.name,
    rating: req.body.rating,
  };
  cheeseInfo.push(newCheese);
  res.redirect(`/cheese`);
});

module.exports = server;
