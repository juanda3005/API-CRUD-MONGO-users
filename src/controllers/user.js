const { update } = require('../models/user');
const User=require('../models/user');
const Car=require('../models/cars');

module.exports={
    //encontrar todos los usuarios
    index:async (req,res,next)=>{
        const users= await User.find();
        //throw new Error('dummy error');
        res.status(200).json(users);
    },

    //agregar nuevo usuario
    newUser:async (req,res,next)=>{
        const newuser=new User(req.body).populate('cars');
        const user= await newuser.save();
        res.status(201).json(user);
    },

    //obtener un solo usuario
    getuser:async (req,res,next)=>{
        const {userId}=req.params;
        const user= await User.findById(userId).populate('cars');
        res.status(200).json(user);
    },

    //reemplazar un usuario
    replaceuser:async (req,res,next)=>{
        const {userId}=req.params;
        const newUser=req.body;
        const oldUser= await User.findByIdAndUpdate(userId,newUser);
        //usuarioencontrajo, reemplazo de ese usuario
        res.status(200).json({success:true,"message":"usuario completo actualizado"});
    },

    //actualizar un usuario,(se usa el metodo patch)

    //solo se actualizan los campos que se especifican, no todo el uauario

    updateuser:async (req,res,next)=>{
        const {userId}=req.params;
        const newUser=req.body;
        const oldUser= await User.findByIdAndUpdate(userId,newUser);
        //usuarioencontrajo, reemplazo de ese usuario
        res.status(200).json({success:true,"message":"campo actualizado"});
    },

    deleteUser:async (req,res,next)=>{
        const {userId}=req.params;
        await User.findByIdAndRemove(userId);
        res.status(200).json({success:true,"message":"usuario borrado"});
    },

    //Obtener autos
    getUserCars:async (req,res,next)=>{
        const {userId}=req.params;
        const user= await User.findById(userId).populate('cars');
        //populate (metodo mongodb) reemplaza los id por los datos que contienen para visualiarlos en el navegador
        res.status(200).json(user);
    },

    //agregar autos
    newUserCar:async (req,res,next)=>{
        const {userId}=req.params;
        const newCar=new Car(req.body);
        const user= await User.findById(userId);
        newCar.seller=user;
        user.cars.push(newCar);
        await user.save();
        res.status(201).json(newCar);
    }



}



