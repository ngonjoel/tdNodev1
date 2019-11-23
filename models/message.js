//var connect = require('../config/bd');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'janvier',
    database : 'nodesbd'
  });

  //Chargé d'inserer (et eventuellement de recuperer) les messages postés
class Message{

   
    static create(content, cb){

        //requete sql pour insertion des données dans la bd
        var query = 'INSERT INTO messages SET content = ?, dateCreation = ?';

        connection.query(query, [content, new Date()], function (error, results, fields) {
            if (error) throw error;
            cb(results);
          });

    }
}
module.exports = Message ;