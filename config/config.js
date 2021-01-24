var dbName= 'queenscollege';
var dbHost = "mongodb://192.168.43.33";
var dbPort = 28018;
var dbPassword = "queenadmin";
var prodAddress= "mongodb+srv://queenadmin:queenadmin@queennodecluster.70ax8.mongodb.net/queenscollege?retryWrites=true&w=majority"
var devAddress = `${dbHost}:${dbPort}/${dbName}`;

var config = {
    server: {
        mobilePort: process.env.PORT || 5005,
        webPort: 8090
    },
    db: {
        name: dbName,
        host: dbHost,
        port: dbPort,
        address: prodAddress
    }
}


module.exports =  config;