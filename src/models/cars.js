const mongoose=require('mongoose');
const {Schema}=mongoose;

const carSchema=new Schema({
    seller:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    make:String,
    model:String,
    year:Number
  
});

module.exports=mongoose.model('car', carSchema)

//al usar el atributo model exporto solo un modelo