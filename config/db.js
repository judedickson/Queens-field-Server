const mongoose = require('mongoose');
const config = require('./config');


var connectDB = async()=>{
    try{
        var conn = await mongoose.connect(config.db.address, {
            useCreateIndex: true,
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`DB is connected to ${conn.connection.host}`);
    }catch(err){
        console.log(`Can't connect to db`);
        process.exit(1);
    }
}

module.exports = connectDB;