const bodyParser=require('body-parser')
const express=require('express');
const { connect } = require('mongoose');
const morgan = require('morgan');
const mongoose=require('mongoose');
const app=express();

const usersRoutes=require('./routes/users');

const URI='mongodb://0.0.0.0/restapi-ejemplo'
mongoose.connect(URI)
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.error(err));

//SETTING
app.set('port',process.env.PORT || 3000);

//MIDLLDEWARES
app.use(morgan('dev'))
app.use(bodyParser.json())

//ROUTES
app.use('/users',usersRoutes);

//STATIC FILES


//STARTING SERVER
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});


