const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.get('/', musicController.index);
router.post('/add', musicController.add);
router.post('/delete/:id', musicController.delete);


module.exports = router;
