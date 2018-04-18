class RelationalDatabase{
  //Write the code for communicating to Relation database instance.
  constructor(config){
    console.log("Initializing RDBMS module ... ");
    console.log("Configuration : ");
    //console.log(config);

    this.config = config;
    console.log("Firing the test query");
  }
  getConnection(){
    var mysql = require('mysql');
    return mysql.createConnection({
      host : this.config.host,
      user : this.config.user,
      password : this.config.password,
      database : this.config.database,

    });
  }

  createTable(data){
    console.log("Trying to create table");
    let queryBuilder = require('./QueryBuilder.js');
    let sql = queryBuilder.createTable(data);
    this.executeQuery(sql,function(data){
      console.log("Table created successfully");
    });
  }
  dropTable(data){
    console.log("Trying to drop table");
    let queryBuilder = require('./QueryBuilder.js');
    let sql = queryBuilder.dropTable(data);
    this.executeQuery(sql, function(data){
      console.log("Table dropped");
    });
  }
  executeQuery(query, callback){
    let connection = this.getConnection();
    console.log("Created a connection :: ");
    // console.log(connection);
    // console.log("###############################");
    connection.connect(function(err){
      if(err){
        console.log(err);
        return;
      }
      connection.query(query,function(err, data){
        let response = data;
        connection.end();
        console.log("Connection Ended");
        console.log("Calling the callback");
        callback(response);
      });
    });
  }
}

module.exports = RelationalDatabase;
