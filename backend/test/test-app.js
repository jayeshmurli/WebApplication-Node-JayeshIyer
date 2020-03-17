var expect  = require('chai').expect;
var request = require('request');

it('Data response status', function(done) {
    request('http://localhost:5000/data' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Data Response content', function(done) {
    request('http://localhost:5000/data' , function(error, response, body) {
        //console.log(JSON.parse(body));
        expect(JSON.parse(body)).have.property('currentTime');
        done();
    });
});