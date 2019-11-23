var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'janvier',
  database : 'nodesbd'
});
 
connection.connect();