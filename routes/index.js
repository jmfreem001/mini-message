var express = require('express');
var router = express.Router();

let messages = [{ text: 'How is it going?', user: 'Fred', added: new Date() }, 
  { text: 'Howdy bub!', user: 'Logan', added: new Date() }, 
  { text: 'Hello everyone!', user: 'Allison', added: new Date() }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Messageboard', messages: messages });
});

/* GET new message page*/
router.get('/new', function(req, res, next){
  res.render('form', { title: 'New Message' });
});

router.post('/new', function( req, res, next){
  let message = { text: req.body.message, user: req.body.name, added: new Date() };
  messages.push(message);
  res.redirect('/');
});

module.exports = router;
