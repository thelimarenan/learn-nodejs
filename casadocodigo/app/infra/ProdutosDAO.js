function ProdutosDAO(connection){
  this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
  this._connection.query('SELECT * FROM produtos', callback);
}

module.exports = function(){
  return ProdutosDAO;
}
