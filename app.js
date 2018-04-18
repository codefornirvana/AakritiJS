// Test runner script for the Database api code. 
// Author : Ratul 

var confModule = require('./Configuration.js');
var config = new confModule().getConfig();
config.then(connectDatabase,
	function(err){
		console.log(err);
 	});


function connectDatabase(config){
//console.log(config);
let rdbmsModule = require('./RDBMS.js');
let rdbms = new rdbmsModule(config.database);
console.log("Connected to RDBMS");
/*let table = {"name" : "tbl_user1"};
rdbms.dropTable(table);
let table0 = {"name" : "tbl_user2"};
rdbms.dropTable(table0);
let table1 = {"name" : "tbl_user3"};
rdbms.dropTable(table1);*/
}
