
//Constants and Variables for connection to database
var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

const dbName = "Universal_Athletics_DB";
const client = new MongoClient(url);
const db = client.db(dbName);
//CHANGES

app.get("/listCoaches/:sport", async (req, res) => {
    const sport = req.params.sport;
    await client.connect();
    const query = {"sports.sport": sport};
    const results = await db
        .collection("coaches")
        .find(query)
        .limit(100)
        .toArray();
    res.status(200);
    res.send(results);
});

app.get("/listCoaches", async (req, res) => {
    await client.connect();
    const query = {};
    const results = await db
        .collection("coaches")
        .find(query)
        .limit(100)
        .toArray();
    res.status(200);
    res.send(results);
});

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});