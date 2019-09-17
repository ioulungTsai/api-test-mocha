var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8080");

// UNIT test begin

describe("SAMPLE unit test",function(){

  it('password should be pass validation', function(done) {

    // calling longin api
    server
    .post('/login')
    .send({"email" : "brandon@gmail.com", "password" : "Brandon666"})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.email.should.equal("brandon@gmail.com");
      res.body.password.should.equal("Brandon666");
      done();
    });
  });
});