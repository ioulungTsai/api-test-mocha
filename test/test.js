const supertest = require("supertest");
const should = require("should");
const app = require('../server')

// This agent refers to PORT where program is runninng.
// const server = supertest.agent("http://localhost:8080");

// UNIT test begin
describe("POST login",function(){
  it('should pass supertest', function(done) {
    supertest(app)
    .post('/login')
    .send({"email" : "brandon@gmail.com", "password" : "Brandon666"})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.message.should.equal("success");
      res.body.email.should.equal("brandon@gmail.com");
      res.body.password.should.equal("Brandon666");
      done();
    });
  });
});