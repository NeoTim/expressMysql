var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/update',function (req, res, next) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT ? AS RESULT', ['Hello World!'], function (err, results) {
            if (err) return next(err);

            res.render('index', {
                title: 'express-myconnection',
                result: results[0].RESULT
            });
        });
    });
});

module.exports = router;
