var http = require('http');

var configuracoes = {
  hostname:"localhost",
  port:3000,
  path:'/produtos',
  method: 'post',
  headers: {
    'Accept':'application/json',
    'Content-type':'application/json'
  }
};

var client = http.request(configuracoes, function(res){
  console.log('Status code: ', res.statusCode);
  res.on('data', function(body){
    console.log('Corpo:' + body);
  })
})

var produto = {
  titulo: '',
  descricao: "node, js e um pouco de http",
  preco: 150
}

client.end(JSON.stringify(produto));
