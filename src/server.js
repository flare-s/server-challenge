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
        <form method="get" action="/colour">
            <label for="hex">Insert a hex value</label>
            <input type="text" name="hex" id="hex"/>
        </form>
        </body>
    </html>`);
});

module.exports = server;
