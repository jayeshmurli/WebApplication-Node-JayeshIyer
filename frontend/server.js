
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


//Rendering html page on access
app.get('/', function(req, res){
    res.render('./views/index.html');
});

//Launch listening server on port 8080
app.listen(8000, function () {
  console.log('App listening on port 8000!')
})