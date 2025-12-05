var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Menu page. */
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Our Menu' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Our Story' });
});

/* GET Comments page (Read). */
router.get('/comments', function(req, res, next) {
  try {
    req.db.query('SELECT * FROM comments ORDER BY created_at DESC;', (err, results) => {
      if (err) {
        console.error('Error fetching comments:', err);
        return res.status(500).send('Error fetching comments');
      }
      res.render('comments', { title: 'Customer Love', comments: results });
    });
  } catch (error) {
    console.error('Error in route:', error);
    res.status(500).send('Server Error');
  }
});

/* POST New Comment (Create). */
router.post('/comments/add', function (req, res, next) {
    const { customer_name, message } = req.body;
    try {
      req.db.query('INSERT INTO comments (customer_name, message) VALUES (?, ?);', [customer_name, message], (err, results) => {
        if (err) {
          console.error('Error adding comment:', err);
          return res.status(500).send('Error adding comment');
        }
        res.redirect('/comments');
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error adding comment');
    }
});

module.exports = router;