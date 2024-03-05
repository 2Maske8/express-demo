var express = require('express');
var router = express.Router();
const quotes = [
  "Querer es poder",
  "Viva Esparta",
  "Dios, patria y libertad",
];

/* GET home page. */
router.get('/', function(req, res, next) {
  const params = req.query;
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.render('about', { name:params?.name,frase:randomQuote } );

});



module.exports = router;
