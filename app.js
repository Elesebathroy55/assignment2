const express = require('express');
const app = new express();
const port = process.env.PORT || 5000;

const nav =  [
   {
      link:'/books',name:'Books'
   },
   {
      link:'/authors',name:'Authors'
   },
   {
      link:'/login',name:'Log In'
   },
   {
      link:'/login/signup',name:'Sign Up'
   }
]
var libraries= [
   {
      name : 'National Digital Library of India',
      site : 'https://ndl.iitkgp.ac.in/',

      img : "ndli.png"
   },
   {
      name : 'Open Library',
      site : 'https://openlibrary.org/',
    
      img : "opl.jpeg"
   },
   {
      name : 'IEEE Xplore Digital Library',
      
      site : 'https://www.ieee.org/',
      img : "idl.jpeg"
   },
   {
     name : 'The Public Library and Digital Archive',
     
     site : 'https://www.ibiblio.org/',
     img : "plda.png"
  },
  {
   name : 'World Digital Library',
   
   site : 'https://www.wdl.org/en/',
   img : "wdl.png"
}
]
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs'); //this method sets the template engine
app.set('views',__dirname+'/src/views'); //index.ejs is to be displayed that is specified here.. file to be displayed
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login', loginRouter);

app.get('/',function(req,res){
   res.render("index",
   {
      nav ,
     title:'Library',
     libraries
   })
});

app.listen(port,()=>{console.log("Server Ready at" + port)});