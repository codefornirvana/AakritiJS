class QueryBuilder{
  //Write functions  to build queries
  static createTable(table){

    var sql = "CREATE TABLE ";
    //Insert the table name to the query
    sql = sql + table.name+" (";
    var columns = table.columns;
    var columnset = [];
    for(var indx in columns){
      var columnline = columns[indx].name+" "+columns[indx].type;
      columnset.push(columnline);
    }
    //Add the columns to the query
    sql = sql + columnset.join(",")+")";
    return sql;
  }

  static dropTable(table){

    var sql = "DROP TABLE " + table.name;
    return sql;

  }

  static alterTable(table){

  }

  static truncateTable(table){

  }

  static insertData(data){

  }

  static selectData(data){

  }

  static updateData(data){

  }

  static removeData(data){

  }

  static softDeleteData(data){

  }
  
}
module.exports = QueryBuilder;
