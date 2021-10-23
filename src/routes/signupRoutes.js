const express=require('express');
const signupRouter=express.Router();
const Signupdata=require('../model/Signupdata');

function router(nav){
signupRouter.get('/',function(req,res){
    res.render('signup',{
        nav,
        title:'Library'
    });
});
signupRouter.post("/add",(req,res)=>{
    var item={
        firstname:req.body.fname,
        username:req.body.username,
        email:req.body.email,
        mobile:req.body.mblnum,
        password:req.body.pwd,

    };
    Signupdata.findOne({mobile:item.mobile},(err,user)=>{
        if(err)console.log(err);
        else{
            if(user !== null){
                console.log("user already taken");
            }else{
            var sign=Signupdata(item);
            sign.save();
            res.redirect('/');
        }
    }
    });
});


return signupRouter;
}
module.exports=router;