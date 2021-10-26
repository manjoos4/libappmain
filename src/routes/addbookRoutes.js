const express=require('express');
const addbookRouter=express.Router();
const Bookdata= require('../model/Bookdata');
const multer=require('multer');
const alert = require('alert');

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});
var upload=multer({
    storage:storage
}).single('image');

function router(nav){
addbookRouter.get('/',function(req,res){
    res.render('addBook',{
        nav,
        title:'Library'
    });
});
addbookRouter.post('/add',upload,function(req,res){
    var item={
title:req.body.title,
author:req.body.author,
genre:req.body.genre,
image:req.file.filename
    }
    var book=Bookdata(item);
    book.save();
    alert('Book added successfully');
    res.redirect('/books');
});
return addbookRouter;
}
module.exports=router;