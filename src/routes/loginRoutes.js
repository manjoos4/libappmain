const express=require('express');
const loginRouter=express.Router();
const Signupdata=require('../model/Signupdata');


function router(nav){
loginRouter.get('/',function(req,res){
    res.render('index',{
        nav,
        title:'Library'
    })
})
return loginRouter;
}
module.exports=router;

// loginRouter.post("/add",(req,res)=>{
//     var item={
//         username:req.body.username,
//         password:req.body.password,
//     };
//     Signupdata.findOne({
//         username:item.username,
//         password:item.password
//     },(err,user)=>{
//         if(err)console.log(err);
//         else{
//             if (user===null){
//                 console.log(user);
//                 console.log("invalid");
//             }else{
//                 console.log("success");
//                 res.redirect("/home");
//             }
//         }
//     }
//     )
// })
 
