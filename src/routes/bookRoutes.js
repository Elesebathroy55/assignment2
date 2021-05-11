const express = require('express');
const booksRouter = express.Router();

function router(nav){
var books = [
   {
       
      title : 'Alchemist',
      author : 'Paulo Coelho',
      genre : 'Drama',
      img : "alchemist.jpeg",
      desc : 'The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.'

   },  
   {
       
       title : 'Tom and Jerry',
       author : 'Joseph Barbara',
       genre : 'Cartoon',
       img : "tom.jpg",
       desc : 'Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry. Many shorts also feature several recurring characters. In its original run, Hanna and Barbera produced 114 Tom and Jerry shorts for MGM from 1940 to 1958. During this time, they won seven Academy Awards for Best Animated Short Film, tying for first place with Walt Disneys Silly Symphonies with the most awards in the category. After the MGM cartoon studio closed in 1957, MGM revived the series with Gene Deitch directing an additional 13 Tom and Jerry shorts for Rembrandt Films from 1961 to 1962. Tom and Jerry then became the highest-grossing animated short film series of that time, overtaking Looney Tunes. Chuck Jones then produced another 34 shorts with Sib Tower 12 Productions between 1963 and 1967. Three more shorts were produced, The Mansion Cat in 2001, The Karate Guard in 2005, and A Fundraising Adventure in 2014, making a total of 164 shorts.'
    },
    {
       title : 'Harry Potter',
       author : 'J K Rowling',
       genre : 'Fantasy',
       img : "harry.jpg",
       desc : 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harrys struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).'
    },
    {
       title : 'Pathummayude Aadu',
       author : 'Basheer',
       genre : 'Drama',
       img : "basheer.jpeg",
       desc : 'Pathummayude Aadu (Pathummas Goat; 1959) is a humorous novel by Vaikom Muhammad Basheer. The characters of the novel are members of his family and the action takes place at his home in Thalayolaparambu. The goat in the story belongs to his sister Pathumma. Basheer begins the novel with an alternative title for the book, Pennungalude Buddhi (The Wisdom of Women).'
    }
 ]
 
 booksRouter.get('/',function(req,res){
    res.render("books",
    {
       nav,
       title:'Books',
       books
    })
 });
 
 booksRouter.get('/newbook',function(req,res){
   res.render("newbook",
   {
      nav,
      title:'+ Add a new book'
      
   })
});
 booksRouter.get('/:id', function(req,res){
 
    const id = req.params.id;
    res.render('book',
    {
       nav,
       title: books[id].title,
       book : books[id]
 
    })
 })

 return booksRouter;
}
 module.exports = router;