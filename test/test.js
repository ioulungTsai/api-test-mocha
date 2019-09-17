const supertest = require("supertest");
const assert = require("assert");
const should = require("should");
const app = require('../server');
const ifPass = require('../helpers/ifPass');

// This agent refers to PORT where program is runninng.
// const server = supertest.agent("http://localhost:8080");

// UNIT test begin
describe("POST login",function(){

  it('should be true', function() {
    const result = ifPass("Brandon666")
    assert.equal(result, true)
  });

  it('should be true', function() {
    const result = ifPass("brAndOn666")
    assert.equal(result, true)
  });

  it('should be false', function() {
    const result = ifPass("Br4ndon")
    assert.equal(result, false)
  });

  it('should be false', function() {
    const result = ifPass("brandon666")
    assert.equal(result, false)
  });

  it('should be false', function() {
    const result = ifPass("BrandonOHYA")
    assert.equal(result, false)
  });

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