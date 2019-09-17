const supertest = require("supertest");
const assert = require("assert");
const should = require("should");
const app = require('../server');
const ifPass = require('../helpers/ifPass');

// This agent refers to PORT where program is runninng.
// const server = supertest.agent("http://localhost:8080");

// UNIT test begin
describe("Unit test of ifPass with 5 sets of password, 2 true, 3 false",function(){
  it('Should be all good', function() {
    assert.equal(ifPass("Brandon666"), true)
    assert.equal(ifPass("brAndOn666"), true)
    assert.equal(ifPass("Br4ndon"), false)
    assert.equal(ifPass("brandon666"), false)
    assert.equal(ifPass("BrandonOHYA"), false)
  });
});

describe("POST login authentication",function(){
  it('Should pass password authentication', function(done) {
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

  it('Should not pass password authentication', function(done) {
    supertest(app)
    .post('/login')
    .send({"email" : "brandon@gmail.com", "password" : "Br4ndon"})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.message.should.equal("Password requirements: at least 8 characters, a uppercase letter, a number")
      done();
    });
  });
});
