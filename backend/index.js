var http = require('http'); 

var server = http.createServer(function (req, res) {   
   
    let datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(datetime);
    if (req.url == '/data') { //check the URL of the current request
            
        //let date = new Date();
        console.log(datetime);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        res.write(JSON.stringify({ "currentTime": datetime}));  
        res.end();  
    }
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')