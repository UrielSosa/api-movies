let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController')

/* === Estáticas === */
router.get('/all', moviesController.all);
router.get('/search/:search', moviesController.search);
router.post('/create', moviesController.create);

module.exports = router;