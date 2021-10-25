const express = require("express");
const app = express();
const path = require("path");

// settings
app.set("port", 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

// middlewares

// routes

app.use(require('./routes'));

//app.get("/123", (req, res) => {
	//res.send("Hello World");
	//res.sendFile(path.join(__dirname, "views/index.html"));
	//console.log(__dirname + "/views/index.html");
	//console.log(path.join(__dirname, "views/index.html"));
//	res.render("index.html");

	//console.log("1234567890");
//});

//app.get("/contact", (req, res) => {
//	res.sendFile(path.join(__dirname, "views/contact.html"));
//});

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get("port"), () => {
	console.log("Server on port", app.get("port"));
});
/*
const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
//app.use(require('./routes'));
app.listen(app.get('port'), () => {
	console.log("Server on port", app.get('port'));
});

// static files
//app.use(express.static(path.join(__dirname, 'public')));


// listening the server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});*/