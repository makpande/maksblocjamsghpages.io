var forEach = function(pointArray, callback) {
    for (var i = 0; pointArray.length > i; i++) {
        callback(pointArray[i]);
    }
}