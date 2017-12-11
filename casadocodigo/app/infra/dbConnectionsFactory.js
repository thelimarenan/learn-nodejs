var mysql = require("mysql");

var createDBConnection = function(){
  if(!process.env.NODE_ENV){
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'casadocodigo_nodejs'
    });
  }

  if(process.env.NODE_ENV == 'test'){
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'casadocodigo_nodejs_test'
    });
  }
}

//Wrapper da function
module.exports = function(){
  return createDBConnection;
}
