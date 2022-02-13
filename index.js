const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes')

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter)

app.listen(PORT, ()=>{
    console.log("Servidor ok")
})