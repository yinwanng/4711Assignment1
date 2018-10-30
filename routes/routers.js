const express = require('express');
const router = express.Router();
const path = require('path');
// Routing    
router.get('/', function(req, res){
    return res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/about', function(req, res){
    // return res.sendFile(path.join(__dirname, '../public/index.html'));
    return res.send("About");
});

module.exports = router;