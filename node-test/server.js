const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser')
var port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(port, function () {
console.log('We are listening on port ' + port)
})

app.get('*', function (req, res) {
res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/num', function (req, res) {
var num = req.body.value
console.log(num)
return res.end('done')
})