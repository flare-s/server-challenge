const express = require("express");

const server = express();

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
            <input type="text" name="cheeseName" id="cheese-name"/>
            <label for="cheese-rate">Cheese rate</label>
            <input type="range" min="0" max="5" name="cheeseRate" id="cheese-rate"/>
        </form>
        </body>
    </html>`);
});

module.exports = server;
