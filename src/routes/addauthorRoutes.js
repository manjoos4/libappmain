const express=require('express');
const addauthorRouter=express.Router();
const Authordata=require('../model/Authordata');
const multer=require('multer');
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
addauthorRouter.get('/',function(req,res){
    res.render('addAuthor',{
        nav,
        title:'Library'
    })
})
addauthorRouter.post('/add',upload,function(req,res){
    var item={
        author:req.body.author,
        genre:req.body.genre,
        image:req.file.filename
            }
            var author=Authordata(item);
            author.save();
            res.redirect('/authors');
});
return addauthorRouter;
}
module.exports=router;