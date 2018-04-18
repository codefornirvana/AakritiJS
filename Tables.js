class Table{
  constructor(name, fields,database){
    this.name = name;
    this.fields = fields;
  }
  create(){
    var queryObj = new Query();//Send the query parameters to Query constructor
    database.query(queryObj);
  }
}
