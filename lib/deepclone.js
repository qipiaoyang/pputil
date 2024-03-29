"use strict";

module.exports =  function(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                result[key] = deepCopy(obj[key]); 
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}