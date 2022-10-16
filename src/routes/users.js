const router=require('express-promise-router')();

const {index,newUser,getuser,replaceuser, updateuser,deleteUser,getUserCars,newUserCar}=require('../controllers/user')

router.get('/',index);
router.post('/',newUser);
router.get('/:userId',getuser);
router.put('/:userId',replaceuser);
router.patch('/:userId',updateuser);
router.delete('/:userId',deleteUser);
router.get('/:userId/cars',getUserCars);
router.post('/:userId/cars',newUserCar);




module.exports=router;