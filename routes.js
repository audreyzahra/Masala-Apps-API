const SummarizeController = require('./Controller/SummarizeController');
const UserController = require('./Controller/UserController');
const router = require('express').Router();

// Routes untuk Summarize
router.post('/addSummarize', SummarizeController.addSummarize);
router.get('/getSummarize', SummarizeController.getSummarize);
router.get('/getSummarize/:id', SummarizeController.getSummarizeByID);
router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;