
  /*********************************************************************************
* WEB322 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Nisrein Hinnawi   Student ID: 130223183    Date: 10/09/2020
*
********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");


var object = [
    {"/": "./home.html"},
    {"/rooms": "./rooms.html"},
    {"/registration": "./registration.html"},
    {"/login": "./login.html"},
]

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, object[0]["/"]))
});

app.get("/rooms", (req, res) => {
    res.sendFile(path.join(__dirname, object[1]["/rooms"]))
});

app.get("/registration", (req, res) => {
    res.sendFile(path.join(__dirname, object[2]["/registration"]))
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, object[3]["/login"]))
});

app.use(express.static(__dirname + '/'));

app.listen(HTTP_PORT);