const express = require("express");
const groupRouter = require("./Routers/groupRouter");
const ejs = require("ejs");
const globalErrorHandler = require('./controllers/errorController');
const { urlencoded } = require("express");


const app = express();

//Middleware to control files-access, url-encoding, setting view engine
app.use(urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(__dirname + '/views'));
app.set("view engine","ejs");

app.use("/",groupRouter);
app.use('/api/v1/group',groupRouter);

app.use(globalErrorHandler);

module.exports = app;