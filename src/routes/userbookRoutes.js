const express = require('express');

const userbooksRouter=express.Router();
const Bookdata=require('../model/Bookdata');


function router(navuser){
    
    
    userbooksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(userbooks){
            res.render('userbooks',{
                navuser,
                title:'Books',
                userbooks
            });

        })
       
    });
       return userbooksRouter;
    }
    module.exports=router;

    // userbooksRouter.get('/:id',function(req,res){
    //     const id=req.params.id;
    //     Bookdata.findOne({_id:id})
    //     .then(function(book){
    //         res.render('book',{
    //             nav,
    //             title:'book',
    //             book
    //         });
    //     });
    //     })