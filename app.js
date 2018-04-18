
// Test runner script for the Database api code. 
// Author : Ratul 


var config = new config().getConfig();
config.then(this.connectDatabase,
	function(err){
		console.log(err);
 	});


var connectDatabase=function(config){
//console.log(config);
let rdbmsModule = require('./RDBMS.js');
let rdbms = new rdbmsModule(config.database);
let table = {"name" : "tbl_user1"};
rdbms.dropTable(table);
let table0 = {"name" : "tbl_user2"};
rdbms.dropTable(table0);
let table1 = {"name" : "tbl_user3"};
rdbms.dropTable(table1);
}
