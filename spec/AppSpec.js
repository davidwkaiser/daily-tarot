var Request = require("request");

describe("Server", ()=> {
  var server;
  beforeAll(()=> {
    server = require("../app");
    mailer = require("../mailer")
    spyOn(mailer, 'sendMail')//.and.callThrough();
  });
  afterAll(()=> {
    // server.close();
  });

  describe("Get /", ()=> {
    var data = {};
    beforeAll((done) =>{
      Request.get("http://localhost:3000/", (error, response, body) =>{
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("returns HTTP Status 200", ()=> {
      expect(data.status).toBe(200);
    });
    it("returns a correct Body", ()=> {
      expect(data.body).toContain("Your card is");
      expect(data.body).toMatch(/Daily Tarot Card/);
      expect(data.body).not.toMatch(/blergh/);
    });
    it("tracks that the mailer was called", ()=> {
      expect(mailer.sendMail).toHaveBeenCalled()
    });
  });

  describe("POST /mailme", ()=>{
    var status = null;
    var body = {
      email:"abc@example.com",
      value: 15
  };
    beforeAll((done)=>{
      Request.post("http://localhost:3000/mailme", function(error, response, body){
          status = response.statusCode;
          done();
      })
    });
    it("returns HTTP status 200", ()=>{
      expect(status).toBe(200);
    })
    it("tracks that the mailer was called", ()=> {
      expect(mailer.sendMail).toHaveBeenCalled()
    });
  })



})