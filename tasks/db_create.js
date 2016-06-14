var massive = require('massive');
var connectionString = "postgres://localhost";

var db = massive.connectSync({connectionString : connectionString});

// run the setup command
db.run("CREATE DATABASE scrabble_express;", function(err, res) {
  if(err) {
    throw(new Error(err.message));
  }
  console.log(res);
  process.exit();
});
