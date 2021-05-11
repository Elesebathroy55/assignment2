const express = require('express');
const loginRouter = express.Router();

function router(nav){
var books = [
    {
       title : 'Tom and Jerry',
       author : 'Joseph Barbara',
       genre : 'Cartoon',
       img : "tom.jpg"
    },
    {
       title : 'Harry Potter',
       author : 'J K Rowling',
       genre : 'Fantasy',
       img : "harry.jpg"
    },
    {
       title : 'Pathummayude Aadu',
       author : 'Basheer',
       genre : 'Drama',
       img : "basheer.jpeg"
    }
 ]
 
 loginRouter.get('/',function(req,res){
    res.render("login",
    {
       nav,
       title:'Log In',
       
    })
 });
 
 loginRouter.get('/signup',function(req,res){
   res.render("signup",
   {
      nav,
      title:'Sign Up'
      
   })
});


 return loginRouter;
}
 module.exports = router;