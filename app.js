require("dotenv").config();
const express = require("express");

const expressLayout = require('express-ejs-layouts');
const app = express();
const PORT = 5000 || process.env.PORT;

// Templating Engine

app.use(expressLayout);
app.set('layout','./layout/main');
app.set

app.listen(PORT,()=>{

    console.log(`Port Lisstion ${PORT}`);
})
