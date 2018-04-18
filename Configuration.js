
class Configuration{
  // This class sets up the app according to the configuration.
  // Reads the configuration files.

   constructor(){
     this.fs = require('fs');
     this.configFile = 'config.json';
     console.log('Iitializing configuration module');
   }
   getConfig(){
     var _self = this;
     return new Promise(function(resolve, reject){
       _self.fs.readFile(_self.configFile, 'utf8', function(err, data){
         // Read the config file to create configuration.
         if(err){
           reject(err);
         }
         else{
           var configObj = JSON.parse(data);
           resolve(configObj);
         }

       });
     });

   }
}
module.exports = Configuration;
