var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
// req: 클라이언트 정보를 담고 있다.
// res: 클라이언트 응답을 위한 객체
router.post('/users', function (req, res, next) {
    return res.json({
        name: req.body.name,
        quote: req.body.quote,
    });
});

module.exports = router;
