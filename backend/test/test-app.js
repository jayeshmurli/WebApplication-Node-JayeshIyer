var expect  = require('chai').expect;
var request = require('request');

//Test case to verify HTTP Status Code Success is Recieved
it('Data response status', function(done) {
    request('http://localhost:5000/data' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

//Test case to verify Date object is recieved
it('Data Response content', function(done) {
    request('http://localhost:5000/data' , function(error, response, body) {
        //console.log(JSON.parse(body));
        expect(JSON.parse(body)).have.property('currentTime');
        done();
    });
});