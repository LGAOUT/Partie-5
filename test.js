const server = require("./server");
const chai = require("chai");
const chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

describe('Test E2E', ()=>{
    it('Should return "Bonjour !"',   (done) => {
        const response = chai.request(server)
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            res.text.should.eq('Bonjour !');
            done();
        });
    });
})