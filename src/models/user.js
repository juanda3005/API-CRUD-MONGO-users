const mongoose=require('mongoose');
const {Schema}=mongoose;


const userSchema=new Schema({
    firstName:String,
    lastname:String,
    email:String,
    cars:[{
        type:Schema.Types.ObjectId,
        ref:'car'
        //el ref cooresponde al nombre del modelo
    }]

});

module.exports=mongoose.model('user', userSchema)


