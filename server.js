/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mitchell Rose Student ID: 018733147 Date: 2022-01-21
*
*  Online (Heroku) URL: https://powerful-wave-22262.herokuapp.com/
*
*  GitHub Repository URL: https://github.com/MitchRose976/Web322-assignment
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Mitchell Rose - 018733147");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);