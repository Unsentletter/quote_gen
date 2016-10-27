var quotes = [
  "Tree Trunks, I'm all jacked up because of you. Look at my jacked up face! - Tree Trunks",
  "I'll slay anything that's evil. That's my deal! - The Enchiridion",
  "Baby, I know what you crave. - The Jiggler",
  "HEY PRINCESS, WANT TO DO THE SCIENCE DANCE WITH ME? - Ricardio the Heart Guy",
  "I feel radder, faster... more adequate! - Business Time",
  "Eat my sword, Ice King! - When Wedding Bells Thaw",
  "Whoa, somebody pick up your freaky cat. - Dungeon",
  "Hands off the housing market! - ",
  "'Here lies Princess Beautiful. She was so beautiful... but died of baldness?!' Dang it! - To Cut a Woman's Hair",
  "Everything small is just a small version of something big! I understand everything! - The Real You"
];

var quote;

function showQuote(){
  document.getElementById('quoteDisplay').innerHTML = generateQuote();
};

function generateQuote(){
  var randomNumber = Math.floor(Math.random()*(quotes.length));
    quote = quotes[randomNumber];
    return quote;
};

function tweet(){
var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(quote);
window.open(twtLink,'_blank');
};
