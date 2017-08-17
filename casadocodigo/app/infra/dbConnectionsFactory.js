var mysql = require("mysql");

var createDBConnection = function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'casadocodigo_nodejs'
  });
}

//Wrapper da function
module.exports = function(){
  return createDBConnection;
}
