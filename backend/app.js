
//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/data', function (req, res) {
    let datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(datetime);
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.set('Content-Type', 'application/json');
    res.json({ currentTime: datetime })

    //res.send(JSON.stringify({ currentTime : datetime}))
})

//Launch listening server on port 8080
app.listen(5000, function () {
  console.log('App listening on port 5000!')
})