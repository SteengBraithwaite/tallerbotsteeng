var express = require('express');
var bodyparser = require('body-parser');
var request = require('request');

const APP_TOKEN = 'EAAV1iw5rJ1cBALHS56rZCVUQ4oGC2JKCJQwXQNFD57WeEjwcy8ZBYzzTfuJJFWZBCgMZADDsP5YqZCA8ZCvJyi2AI5QauoKyFGgB0Md2haQ224bRGCxlKvfOWaGqwHCKuTJUGRbkHZBStPZBxxB2tmG8k8RLSaEy6faQTHttQl434QZDZD';

var app = express();
app.use (bodyparser.json());

app.listen(8080, function(){
	console.log("El servidor se encuentra en el puerto 8080");
});
app.get('/', function(req, res){
  res.sendfile(__dirname + 'index.js');
});
app.get('/about', function(req, res){
  res.sendfile(__dirname + 'index.js');
});
app.get('/webhook', function(req, res){
  
  if(req.query['hub.verify_token'] === 'Este_es_mi_token'){
  	res.send(req.query['hub.challenge']);
  }else{
  	res.send('Tu no tienes que entrar aqui');
  }
});