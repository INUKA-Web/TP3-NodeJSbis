const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile('index.html', {"root":"."})
})

app.get('/coucou', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send('Coucou !!!')
})

app.post('/disbonjour', (req, res) => {
  res.send('<html><body><h1>Bonjour <span style="color:red">' + req.body.personne + '</span></h1></body></html>')
})

app.post('/disbonjour-json', (req, res) => {
  res.set('Content-Type', 'application/json')
  res.send('{"message":"Bonjour ' + req.body.personne + '"}')
})

app.post('/disbonjour-template-html', (req, res) => {
  res.render('bonjour', {personne: req.body.personne})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})