const express=require('express');
const userRouter=express.Router();
// const Admindata = require('../model/Admin');


function router(navuser){
userRouter.get('/',function(req,res){
    res.render('index',{
        navuser,
        title:'Library'
    });
})

return loginRouter;
}
module.exports=router;

