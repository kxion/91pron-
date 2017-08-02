let request = require('request')
let cheerio = require('cheerio')
let fs = require('fs');
let express = require('express')
let app = express()

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.redirect('index.html')
})

app.get('/upload', function (req, res) {

    let reqUrl = req.query.url

    request({url: reqUrl}, function (err, response, body) {
        let $ = cheerio.load(body)


        let src = $('#vid source').attr('src')

        res.send(src)
    })

})


app.listen(9000, function () {
    console.log('running')
})