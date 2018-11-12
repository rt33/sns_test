let express = require('express');
let db = new (require('./db'))();
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    await db.init();
    data = await db.getTweetData();
    console.log(data);
    res.render('index', { title: 'Express', test : data});
  } catch ( e ) {
    console.log(e);
  }
});

module.exports = router;
