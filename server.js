var express = require('express');
const path = require("path");
var app = express();

app.get('/', (req,res) => {
    res.sendFile('/index.html');
})

app.listen(process.env.PORT || 3000, () => {
    console.log("App running");
})