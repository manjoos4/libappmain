const express = require('express');
const app= express();
const port=process.env.PORT || 2000;

const bodyParser = require('body-parser'); // Middleware 

app.use(bodyParser.urlencoded({ extended: false }));

// const navuser=[
//     {
//         link:'/home',name:'Home'
//     },
//     {
//         link:'/books',name:'Books'
//     },
//         {
//             link:'/authors',name:'Authors'
//     },
//         {
//         link:'/logout',name:'Logout'
//     }

// ];


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
        link:'/admin/addbook',name:'Add Book'
    },
    {
        link:'/admin/addauthor',name:'Add Author'
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
// const userRouter=require('./src/routes/userRoutes')(navuser)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin/addbook',addbookRouter);
app.use('/admin/addauthor',addauthorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
// app.use('/userlogin',userRouter);
// app.use(express.json());

// app.use(
//     session({
//         secret:"my secret key",
//         saveUninitialized:true,
//         resave:false,

//     })
// );
// app.use((req,res,next)=>{
//     res.locals.message=req.session.message;
//     delete req.session.message;
//     next();
// });

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

app.listen(port,()=>{console.log("Server Ready at"+port)});
