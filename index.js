const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index')
const tabuadaController = require('./routes/tabuada')

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', indexRouter)
app.use('/tabuadas', tabuadaController)

app.listen(PORT, ()=>{
    console.log("Servidor ok")
})