const router = require('express').Router();
const path = require("path");

// Makes a get request to the target '/exercise', then delivers the exercise.html to that endpoint
router.get('/exercise', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    } catch (err) {
        res.status(500).json(err);
    }
});

// Makes a get request to the target '/stats', then delivers the stats.html client-side
router.get('/stats', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;