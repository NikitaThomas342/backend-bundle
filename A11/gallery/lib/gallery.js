var fs = require('fs'),
    album = require('./album.js');

exports.version = "1.0.0";

exports.Gallery = (root, callback) => {
    fs.readdir(root + "image/", (err, files) => {
        if(err) {
            throw err;
        }
        var gallery_list = [];
        console.log(files);
        (function loop_in(index) {
            if(index == files.length) {
                callback(null, gallery_list);
                return;
            }

            fs.stat(root + "image/" + files[index], (err, stats) => {
                if(err) {
                    throw err;
                }
                if(stats.isDirectory()) {
                    var current_path = root + "image/" + files[index];
                    gallery_list.push(album.createAlbum(current_path));
                }
                loop_in(index + 1);
            });
        })(0);
    });
}
