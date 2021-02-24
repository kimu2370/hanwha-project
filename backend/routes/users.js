var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});
// req: 클라이언트 정보를 담고 있다.
// res: 클라이언트 응답을 위한 객체
router.post("/users", function (req, res, next) {
    res.status(200).json({
        payload: {
            name: req.body.name + "server",
            quote: req.body.quote + "server",
        },
    });
});

module.exports = router;
