const express = require('express');
const authorsRouter = express.Router();

function router(nav){
var authors = [
    {
       name : 'William Shakespeare',
       nationality : 'English',
       yearsactive : 'Born:1564..Died:1616',
       img : "shakespeare.jpg",
       desc : "William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet and the Bard of Avon (or simply the Bard). His extant works, including collaborations, consist of some 39 plays,[c] 154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.[7] They also continue to be studied and reinterpreted."
    },
    {
       name : 'J. K. Rowling',
       nationality : 'English',
       yearsactive : 'Born:1965..',
       img : "rowling.jpg",
       desc : "Joanne Rowling  (born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith."
    },
    {
       name : 'Basheer',
       nationality : 'Indian (Malayalam)',
       yearsactive : 'Born:1908..Died:1994',
       img : "basheer2.jpg",
       desc : "Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), also known as Beypore Sulthan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam and Anargha Nimisham and the translations of his works into other languages have earned him worldwide acclaim. The Government of India awarded him the fourth highest civilian honor of the Padma Shri in 1982. He was also a recipient of the Sahitya Academy Fellowship, Kerala Sahitya Academy Fellowship, and the Kerala State Film Award for Best Story."
    },
    {
      name : 'Paulo Coelho de Souza',
      nationality : 'Brazilian',
      yearsactive : 'Born:1947..',
      img : "Paulocoelho.jpg",
      desc : "The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist. In 1986, PAULO COELHO did the pilgrimage to Saint James of Compostella, an experience later to be documented in his book The Pilgrimage. In the following year, COELHO published The Alchemist. Slow initial sales convinced his first publisher to drop the novel, but it went on to become one of the best selling Brazilian books of all time. Other titles include Brida (1990), The Valkyries (1992), By the river Piedra I sat Down and Wept (1994), the collection of his best columns published in the Brazilian newspaper Folha de São Paulo entitle Maktub (1994), the compilation of texts Phrases (1995), The Fifth Mountain (1996), Manual of a Warrior of Light (1997), Veronika decides to die (1998), The Devil and Miss Prym (2000), the compilation of traditional tales in Stories for parents, children and grandchildren (2001), Eleven Minutes (2003), The Zahir (2005), The Witch of Portobello (2006) and Winner Stands Alone (to be released in 2009)."
   }
 ]
 
 authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
       nav,
       title:'Authors',
       authors
    })
 });

 authorsRouter.get('/newauthor',function(req,res){
   res.render("newauthor",
   {
      nav,
      title:'+ Add a new author'
      
   })
});

 
 authorsRouter.get('/:id', function(req,res){
 
    const id = req.params.id;
    res.render('author',
    {
       nav,
       title: authors[id].name,
       author : authors[id]
 
    })
 })

 return authorsRouter;
}
 module.exports = router;