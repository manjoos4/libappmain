const express = require('express');

const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');
const multer=require('multer');
const alert = require('alert');

function router(nav){
    
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('books',{
                nav,
                title:'Books',
                books
            });

        })
       
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'book',
                book
            });
        });
        })
       
        booksRouter.get('/edit/:id',function(req,res){
            const id=req.params.id;
            Bookdata.findOne({_id:id})
                .then(function(book){
                     res.render('updatebook',
                     {
                        nav,
                        title:'book',
                        book,id
                })
               
            });
        })
  
//DELETE book
booksRouter.get('/delete/:id',function(req,res,next){
    const id=req.params.id;
    Bookdata.findByIdAndRemove (id)
        .then(function(){
            res.redirect('/books')

        })
       alert('book deleted');
    });

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
    
    booksRouter.get('/edit/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
            .then(function(book){
                 res.render('updatebook',
                 {
                    nav,
                    title:'book',
                    book,id
            })
           
        });
    })
    
    booksRouter.post('/:id/update',upload,function(req,res){
        const id=req.params.id;
        let new_image='';
        if(req.file){
            new_image=req.file.filename;
            try{
                fs.unlinkSync("./public/images/"+req.body.old_image);
            }catch(err){
                console.log(err);
            }
        }else{
            new_image=req.body.old_image;
        }
    
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:new_image,
        }
        console.log(item);
        Bookdata.findByIdAndUpdate(id,item)
        .then(function(){
            res.redirect('/books');
        })
        alert('Book details updated');
    }) ;
    return booksRouter;
    }
    module.exports=router;