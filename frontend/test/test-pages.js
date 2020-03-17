var expect  = require('chai').expect;
var request = require('request');

//Test case to verify website is available on port 8000
it('Main page content', function(done) {
    request('http://localhost:8000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});