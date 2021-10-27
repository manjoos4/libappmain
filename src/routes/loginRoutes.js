const express=require('express');
const loginRouter=express.Router();
const Signupdata=require('../model/Signupdata');

const bcrypt = require('bcrypt');
const alert = require('alert');

function router(nav){
loginRouter.get('/',function(req,res){
    res.render('index',{
        nav,
        title:'Library'
    });
})


loginRouter.post('/add',(req,res)=>{
    var item={
        username:req.body.username,
        password:req.body.password,
    };
    
if((item.username==="admin")&&(item.password==="12345")){
    alert(' admin login is success');
    res.redirect("/home")
}
else
    Signupdata.findOne({
        username:item.username,
        password:item.password
    },(err,user)=>{
                if(err){console.log(err);
                alert('invalid credentials');
                res.redirect('/');
                }
        else{
            if (user===null){
                console.log(user);
                alert("invalid credentials");
                res.redirect('/');
            }else{
                console.log("success");
                alert('User Login Success');
                res.redirect('/home');
            }
        }
    }
    )
})
return loginRouter;
}
module.exports=router;

 
