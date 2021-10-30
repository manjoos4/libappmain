const express = require('express');
const app= express();
const port=process.env.PORT || 2000;

const bodyParser = require('body-parser'); // Middleware 

app.use(bodyParser.urlencoded({ extended: false }));



const nav= [
    {
        link:'/home',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },
        {
            link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    },
    {
        link:'/logout',name:'Logout'
    }

];



const navuser= [
    {
        link:'/userhome',name:'Home'
    },
    {
        link:'/userbooks',name:'Books'
    },
        {
            link:'/userauthors',name:'Authors'
    },

    {
        link:'/logout',name:'Logout'
    }

];

const booksRouter=require('./src/routes/bookRoutes')(nav)
const authorsRouter=require('./src/routes/authorRoutes')(nav)
const addbookRouter=require('./src/routes/addbookRoutes')(nav)
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav)
const loginRouter=require('./src/routes/loginRoutes')(nav)
const signupRouter=require('./src/routes/signupRoutes')(nav)
const userbooksRouter=require('./src/routes/userbookRoutes')(navuser)
const userauthorsRouter=require('./src/routes/userauthorRoutes')(navuser)



app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/login',loginRouter);
app.use('/login/add',loginRouter);
app.use('/signup/add',signupRouter);
app.use('/signup',signupRouter);
app.use('/userbooks',userbooksRouter);
app.use('/userauthors',userauthorsRouter);


app.get('/logout',function(req,res){
    res.render("login",
    {
        title:'Login'
    })
});
app.get('/',function(req,res){
    
    res.render("login",
    {
        title:'Login'
    })
});
app.get('/home',function(req,res){
    
    res.render("index",
    {
        nav,
        title:'Home'
    })
});
app.get('/userhome',function(req,res){
    
    res.render("userindex",
    {
        navuser,
        title:'Home'
    })
});
app.get('/home/userlogin',function(req,res){
    
    res.render("userindex",
    {
        navuser,
        title:'Home'
    })
});
// app.get('/userbooks',function(req,res){
    
//     res.render("userbooks",
//     {
//         navuser,
//         title:'Books'
//     })
// });
app.listen(port,()=>{console.log("Server Ready at"+port)});
