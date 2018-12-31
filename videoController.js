// Import video model
Video = require('./videoModel');

// Handle index actions
exports.index = function(req, res){
    Video.get(function(err, videos){
        if(err){
            res.json({
                status: "error",
                message: "err"
            });
        }
        res.json({
            status: "success",
            message: "Video data retrieved successfully",
            data: videos
        });
    });
};

//Handle insert video actions
exports.new = function(req, res){
    var video = new Video();
    video.title = req.body.title ? req.body.title : video.title;
    video.thumbnailURL = req.body.thumbnailURL;
    video.videoURL = req.body.videoURL,
    video.videoDuration = req.body.videoDuration;
    // Save the video and check for errors
    video.save(function(err){
        //if(err)
        // res.json(err);

        res.json({
            message: 'New video inserted!',
            data: video
        });
    });
};

// Handle view video info
exports.view = function(req, res){
    Video.findById(req.params.video_id, function(err, video){
        if(err)
            res.json(err);
        res.json({
            message: "Video details loading..",
            data: video
        });
    });
};

// Handle delete video
exports.delete = function(req, res){
    Video.remove({
        _id: req.params.video_id
    }, function(err, contact){
        if(err)
            res.send(err);

        res.json({
            status: "success",
            message: "Video deleted"
        });
    });
};