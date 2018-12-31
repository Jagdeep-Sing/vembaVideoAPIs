let router = require('express').Router();

//default API response
router.get('/', function(req, res){
    res.json({status: 'API working', message:'Hello'});
});

// Import video controller
var videoController = require('./videoController');

// Video routes
router.route('/videos')
    .get(videoController.index)
    .post(videoController.new);

router.route('/videos/:video_id')
    .get(videoController.view);
    
//Export API routes
module.exports = router;