var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var handlebars = require('express-handlebars');
var config = require('./config/config');
var userRoute = require('./user/routes/mobile_user.route');
var adminRoute = require('./admin/routes/admin.route');
var userFileMiddleWare = require('./user/middleWares/file.middleware');
var connectDB = require('./config/db');
const { urlencoded } = require('express');

//connectDB();
var app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.set('views', path.join(__dirname, 'admin/views'));
app.engine('handlebars', handlebars({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.use('/admin', express.static(path.join(__dirname, 'public/local')));
app.use('/files', express.static('./public/file/public'));
app.use('/userFiles' ,userFileMiddleWare(()=>{
    return express.static('./public/file/user');
}));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/user', userRoute);
app.use('/admin', adminRoute);

app.listen(config.server.mobilePort, ()=>{
    console.log(`Mobile Server Is Running In ${(process.env.NODE_ENV).toUpperCase()} Mode On ${config.server.mobilePort}`);
});