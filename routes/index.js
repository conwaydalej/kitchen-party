var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/player', function(req, res, next) {
    res.render('player', { title: 'Express' });
});

router.get('/autoplayer', function(req, res, next) {
    res.render('autoplayer', { title: 'Express' });
});

module.exports = router;