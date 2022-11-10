//richiedere una costante per instanziare express già installato
const express = require('express');
//instanziamo express in app
const app = express();
app.use(express.static('public'));
//testiamo se parla
app.listen(4000, function(){
    console.log('server in ascolto su porta 4000');
})