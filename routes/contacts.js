var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/delete', function(req, res, next) {
  var phone = req.query.phone;

  var fs = require('fs');
  var content = fs.readFileSync('public/contacts.json');
var contacts = JSON.parse(content);

  res.send('removing contact::' + contacts[0].lastname);
});

module.exports = router;
