const supertest = require("supertest");
const assert = require("assert");
const should = require("should");
const app = require('../server');
const ifPass = require('../helpers/ifPass');

// This agent refers to PORT where program is runninng.
// const server = supertest.agent("http://localhost:8080");

// UNIT test begin
describe("ifPass test",function(){
  it('should be all good', function() {
    assert.equal(ifPass("Brandon666"), true)
    assert.equal(ifPass("brAndOn666"), true)
    assert.equal(ifPass("Br4ndon"), false)
    assert.equal(ifPass("brandon666"), false)
    assert.equal(ifPass("BrandonOHYA"), false)
  });
});

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
