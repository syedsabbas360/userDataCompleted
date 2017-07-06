const express = require('express')
const mustache = require('mustache-express')
const path = require('path')
const data = require('./data.js')
const app = express()

app.engine('mustache', mustache())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static(__dirname + '/public'))

app.listen(3000, function(){
  console.log("We're up and running!")
})


app.get('/', function(req, res){
  res.render('index', {
    data: data.users
  })
})

app.get('/:id', function(req, res){
  let id = req.params.id - 1
  res.render('users', {
    data: data.users[id]
  })
})
