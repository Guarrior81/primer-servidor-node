const express = require('express')
const app = express()
app.get('/', function(req, res){
  res.send('Hola Martinsito')
})
app.listen(3000)
