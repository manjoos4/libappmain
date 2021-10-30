const express = require('express');
const Authordata = require('../model/Authordata');

const userauthorsRouter=express.Router();


function router(navuser){
    
    userauthorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(userauthors){
            res.render('userauthors',{
                navuser,
                title:'Authors',
                userauthors
            });
        })
       
    });
//     authorsRouter.get('/:id',function(req,res){
//         const id=req.params.id
//         Authordata.findOne({_id:id})
//         .then (function(author){
//         res.render('author',{
//             nav,
//             title:'author',
//             author
//         });
//         })
//     });



// //DELETE author
// authorsRouter.get('/delete/:id',function(req,res,next){
//     const id=req.params.id;
//     Authordata.findByIdAndRemove (id)
//         .then(function(){
//              res.redirect('/authors')

//         })
//        alert('Author deleted');
//     });
// //update
// var storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'./public/images');
//     },
//     filename:function(req,file,cb){
//         cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
//     }
// });
// var upload=multer({
//     storage:storage
// }).single('image');

// authorsRouter.get('/edit/:id',function(req,res){
//     const id=req.params.id;
//     Authordata.findOne({_id:id})
//         .then(function(author){
//              res.render('updateauthor',
//              {
//                 nav,
//                 title:'author',
//                 author,id
//         })
       
//     });
// })

// authorsRouter.post('/:id/update',upload,function(req,res){
//     const id=req.params.id;
//     let new_image='';
//     if(req.file){
//         new_image=req.file.filename;
//         try{
//             fs.unlinkSync("./public/images/"+req.body.old_image);
//         }catch(err){
//             console.log(err);
//         }
//     }else{
//         new_image=req.body.old_image;
//     }

//     var item={
//         author:req.body.author,
//         genre:req.body.genre,
//         image:new_image,
//     }
//     console.log(item);
//     Authordata.findByIdAndUpdate(id,item)
//     .then(function(){
//         res.redirect('/authors');
//     })
//     alert('author details updated');
// }) ;
return userauthorsRouter;
}
module.exports=router;