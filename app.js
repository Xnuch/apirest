var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('Web inicial de mi API');
});

app.get('/saludo', function (req, res){
    res.send('Hola mundo');
});

app.get('/despedido', function (req, res){
    res.send('Adios mundo cruel');
});

app.post('/despedido', function (req, res){
    
});

app.listen(3000, function(){
    console.log('Aplicacion ejemplo, escuchando el puerto 3000!');
});