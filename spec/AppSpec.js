var Request = require("request");

describe("Server", function() {
  var server;
  beforeAll(function() {
    server = require("../app");
    mailer = require("../mailer")
    spyOn(mailer, 'sendMail')//.and.callThrough();
  });
  afterAll(function() {
    // server.close();
  });

  describe("Get /", function() {
    var data = {};
    beforeAll(function(done){
      Request.get("http://localhost:3000/", function(error, response, body){
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("returns HTTP Status 200", function() {
      expect(data.status).toBe(200);
    });
    it("returns a correct Body", function() {
      expect(data.body).toContain("Your card is");
      expect(data.body).toMatch(/Daily Tarot Card/);
      expect(data.body).not.toMatch(/blergh/);
    });
    it("tracks that the mailer was called", function() {
      expect(mailer.sendMail).toHaveBeenCalled()
    });
  });

  describe("POST /mailme", function(){
    var status = null;
    var body = {
      email:"abc@example.com",
      value: 15
  };
    beforeAll(function(done){
      Request.post("http://localhost:3000/mailme", function(error, response, body){
          status = response.statusCode;
          done();
      })
    });
    it("returns HTTP status 200", function(){
      expect(status).toBe(200);
    })
    it("tracks that the mailer was called", function() {
      expect(mailer.sendMail).toHaveBeenCalled()
    });
  })
})