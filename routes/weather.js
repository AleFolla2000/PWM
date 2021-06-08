var express = require('express');
var router = express.Router();

router.use(express.json());
/* GET users listing. */
router.get('/', function(req, res, next) {
  const request = require('request');

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    qs: {q: req.query.q},
    headers: {
      'x-rapidapi-key': 'ef89091173mshc17df7ae57d8719p1feafcjsn44692889a230',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.status(200).send(body);
  });
  
  

});

module.exports = router;


