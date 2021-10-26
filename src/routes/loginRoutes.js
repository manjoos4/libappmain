const express=require('express');
const loginRouter=express.Router();
const Signupdata=require('../model/Signupdata');
// const Admindata = require('../model/Admin');

const bcrypt = require('bcrypt');
const alert = require('alert');

function router(nav){
loginRouter.get('/',function(req,res){
    res.render('index',{
        nav,
        title:'Library'
    });
})
// return loginRouter;
// }
// module.exports=router;

loginRouter.post("/add",(req,res)=>{
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
                alert('invalid credentials');}
        else{
            if (user===null){
                console.log(user);
                alert("invalid credentials");
                res.redirect('/');
            }else{
                console.log("success");
                alert('User Login Success');
                res.redirect("/home");
            }
        }
    }
    )
})
return loginRouter;
}
module.exports=router;

 
// loginRouter.post('/add',(req,res)=>{
       
//     let username = req.body.username;
//     let password = req.body.password;
   
//     console.log(username,password);
//     Signupdata.findOne({'username':username},(err,user)=>{
//         if(user){
//             bcrypt.compare(password,user.password)
//             .then((status)=>{
//                 if(status){
//                     console.log('User Added');
//                     div.user=username;
//                     res.redirect('/index');
//                 }else{
//                     console.log('Wrong Password');
//                     res.render('/');
//                     alert('Wrong Password!!!');
//                 }
//             })
//         }else if(!user){
//             Admindata.find({'username':username},(err,admin)=>{
//                 if(admin){
//                     if(password === '12345'){
//                         console.log('Admin Added');
//                         div.user="Admin";
//                         res.redirect('/index');
//                     }else{
//                         console.log('Wrong pwd');
//                         res.redirect('/');
//                     }
//                 }else{
//                         res.redirect('/');
//                         alert('Not an Admin!!!');
//                 }
//             });
//         }else{
//             res.render('signup');
//             alert('User not Found!!! Please Sign-In');
//         }
//     });
// });
// return loginRouter;
// }

// module.exports = router;