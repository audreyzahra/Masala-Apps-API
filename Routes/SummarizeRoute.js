const SummarizeController = require('../Controller/SummarizeController');
const router = require('express').Router();
const auth = require('../middleware/auth');

// Routes untuk Summarize
router.post('/addSummarize', auth, SummarizeController.addSummarize);
router.post('/getSummarize', auth, SummarizeController.getSummarize);
router.get('/getSummarize/:id', auth, SummarizeController.getSummarizeByID);

module.exports = router;