var mongoose = require('mongoose');

// Setup schema

var videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnailURL: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    },
    videoDuration: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Video model

var Video = module.exports = mongoose.model('video', videoSchema);

module.exports.get = function(callback, limit){
    Video.find(callback).limit(limit);
}