var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function(){

  beforeEach(function(done){
    var conn = express.infra.dbConnectionsFactory();
    conn.query("DELETE FROM produtos", function(ex, result){
      if(!ex){
        done();
      }
    });
  });

  it('#Listagem json', function(done){
    request.get("/produtos")
    .set('Accept','application/json')
    .expect('Content-Type',/json/)
    .expect(200,done);
  });

  it('#Cadastro de novo produto com dados invalidos', function(done){
    request.post("/produtos")
    .send({"titulo":"","descricao":"novo livro"})
    .expect(400,done);
  });

  it('#Cadastro de novo produto com dados validos', function(done){
    request.post("/produtos")
    .send({"titulo":"Novo Titulo","descricao":"novo livro","preco":50.50})
    .expect(302,done);
  });
})
